import React, { useState, useEffect, useRef } from 'react';
import { TuiBox, TuiButton } from './TuiComponents';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, TerminalSquare, RotateCcw } from 'lucide-react';
import { Chat } from '@google/genai';

export const GeminiTerminal: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  
  // Use a ref to persist the chat session across renders
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      chatSessionRef.current = createChatSession();
      if (chatSessionRef.current) {
        setIsReady(true);
        // Initial greeting
        setMessages([
          {
            role: 'model',
            text: 'ARES TERMINAL ONLINE. \nI AM YOUR ASSISTANT. ASK ME ABOUT THE DEVELOPER OR SYSTEM SPECS.',
            timestamp: new Date()
          }
        ]);
      } else {
        setMessages([{
             role: 'model',
             text: 'WARNING: MISSING API KEY. TERMINAL OFFLINE. \n(Check Your Environment Variables)',
             timestamp: new Date(),
             isError: true
        }]);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(chatSessionRef.current, userMsg.text);
      const modelMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'model',
        text: 'CRITICAL ERROR: DATA STREAM CORRUPTED.',
        timestamp: new Date(),
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-gruv-orange">
             <TerminalSquare className="animate-pulse" />
             <h2 className="text-xl font-bold">TERMINAL_UPLINK</h2>
          </div>
          <button 
             onClick={() => setMessages([])} 
             className="text-xs text-gruv-gray hover:text-gruv-red transition-colors flex items-center gap-1"
          >
             <RotateCcw size={12}/> FLUSH_BUFFER
          </button>
      </div>

      <TuiBox noPadding borderColor="border-gruv-gray">
        <div className="h-[400px] flex flex-col bg-gruv-bgSoft/30">
          
          {/* Chat History */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 font-mono text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 border ${
                    msg.role === 'user' 
                      ? 'border-gruv-fg text-gruv-fg bg-gruv-bgSoft/50' 
                      : msg.isError 
                        ? 'border-gruv-red text-gruv-red bg-gruv-red/10'
                        : 'border-gruv-green text-gruv-green bg-gruv-green/5'
                  }`}
                >
                  <div className="text-[10px] opacity-50 mb-1 uppercase tracking-wider flex justify-between gap-4">
                     <span>{msg.role === 'user' ? 'USR_INPUT' : 'SYS_OUTPUT'}</span>
                     <span>{msg.timestamp.toLocaleTimeString([], {hour12: false})}</span>
                  </div>
                  <div className="whitespace-pre-wrap leading-relaxed">
                     {msg.role === 'model' && !msg.isError && <span className="mr-2 text-gruv-aqua">{'>'}</span>}
                     {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="p-3 text-gruv-green animate-pulse">
                    PROCESSING...
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gruv-gray p-2 bg-gruv-bg flex gap-2">
            <div className="flex items-center px-2 text-gruv-yellow pointer-events-none">
               $
            </div>
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isReady ? "Enter command or query..." : "Connecting..."}
              disabled={!isReady || isLoading}
              className="flex-grow bg-transparent text-gruv-fg placeholder-gruv-gray/50 outline-none font-mono"
              autoFocus
            />
            <button 
               onClick={handleSend}
               disabled={!input.trim() || isLoading}
               className="px-4 text-gruv-fg hover:text-gruv-orange disabled:opacity-30 transition-colors"
            >
               <Send size={18} />
            </button>
          </div>
        </div>
      </TuiBox>
      <div className="mt-2 text-xs text-gruv-gray text-center font-mono">
        * SESSION ENCRYPTED via GEMINI-2.5-FLASH Protocol *
      </div>
    </section>
  );
};