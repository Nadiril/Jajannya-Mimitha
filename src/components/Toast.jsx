'use client';

import { useNotification } from '@/context/NotificationContext';

export default function Toast() {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className={`pointer-events-auto flex items-center gap-3 rounded-lg px-5 py-4 text-white shadow-lg animate-in slide-in-from-bottom-4 fade-in-0 duration-300 ${
            notif.type === 'success'
              ? 'bg-green-500'
              : notif.type === 'error'
              ? 'bg-red-500'
              : 'bg-blue-500'
          }`}
        >
          {notif.type === 'success' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
          {notif.type === 'error' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          )}
          <span className="text-sm font-semibold">{notif.message}</span>
          <button
            onClick={() => removeNotification(notif.id)}
            className="ml-auto flex-shrink-0 opacity-70 hover:opacity-100 transition"
            aria-label="Tutup notifikasi"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
