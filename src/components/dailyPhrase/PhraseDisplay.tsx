import React from 'react';

interface Quote {
  _id: string;
  content: string;
  author: string;
  tags?: string[];
}

interface PhraseDisplayProps {
  quote: Quote;
  onNewPhrase: () => void;
  onShowExplanation: () => void;
  showExplanationButton: boolean;
}

const PhraseDisplay: React.FC<PhraseDisplayProps> = ({ 
  quote, 
  onNewPhrase, 
  onShowExplanation,
  showExplanationButton 
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-700">
      <blockquote className="relative">
        <svg
          className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-slate-200 dark:text-slate-700"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.7662 12.86C3.84023 12.86 3.05263 12.5533 2.39342 11.94C1.76421 11.3266 1.44961 10.4467 1.44961 9.29999C1.44961 8.07332 1.83297 6.87332 2.59969 5.69999C3.39961 4.49999 4.48297 3.55332 5.84977 2.85999L6.7662 4.25999C5.99342 4.73999 5.35344 5.27332 4.84669 5.85999C4.36669 6.44666 4.01311 7.12666 3.78595 7.89999C4.19584 7.79332 4.6058 7.73999 5.01575 7.73999C5.65809 7.73999 6.13297 7.97999 6.44042 8.45999C6.74788 8.93999 6.9016 9.55333 6.89433 10.3H7.39762ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0668 12.86 10.2792 12.5533 9.62002 11.94C8.99081 11.3266 8.67621 10.4467 8.67621 9.29999C8.67621 8.07332 9.05957 6.87332 9.82629 5.69999C10.6262 4.49999 11.7096 3.55332 13.0764 2.85999L13.9928 4.25999C13.22 4.73999 12.58 5.27332 12.0733 5.85999C11.5933 6.44666 11.2397 7.12666 11.0126 7.89999C11.4224 7.79332 11.8324 7.73999 12.2424 7.73999C12.8847 7.73999 13.3596 7.97999 13.6671 8.45999C13.9745 8.93999 14.1282 9.55333 14.121 10.3H14.6242Z"
            fill="currentColor"
          />
        </svg>

        <div className="relative z-10">
          <p className="text-xl text-slate-800 dark:text-slate-200 mb-4">
            {quote.content}
          </p>
          
          <footer className="text-sm text-slate-500 dark:text-slate-400">
            — <cite className="font-medium">{quote.author}</cite>
          </footer>
        </div>
      </blockquote>

      <div className="mt-6 flex flex-wrap gap-2">
        {quote.tags && quote.tags.map((tag, index) => (
          <span 
            key={index}
            className="inline-block px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-2">
        <button
          onClick={onNewPhrase}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Nueva frase
        </button>
        
        {showExplanationButton && (
          <button
            onClick={onShowExplanation}
            className="px-4 py-2 bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200 rounded-md hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            Mostrar explicación
          </button>
        )}
      </div>
    </div>
  );
};

export default PhraseDisplay;
