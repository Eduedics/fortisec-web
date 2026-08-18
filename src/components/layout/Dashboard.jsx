import { cn } from '@/utils';
import { useState } from 'react';

export const DashboardConfig = {};

export default function Dashboard({ children, config = {}, className }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const {
    sidebar = {},
    header = {},
    main = {}
  } = config;

  const {
    logo = { text: 'Dashboard' },
    navigation = {},
    footer: sidebarFooter,
    className: sidebarClassName
  } = sidebar;

  const {
    search = { enabled: true, placeholder: 'Search...' },
    notifications = { enabled: true, count: 0 },
    user = { name: 'User', email: 'user@example.com', initials: 'U' },
    actions: headerActions,
    className: headerClassName
  } = header;

  const {
    maxWidth = 'full',
    padding = true,
    className: mainClassName
  } = main;

  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full'
  };

  return (
    <div className={cn('flex h-screen bg-gray-50/50', className)}>
      {/* Sidebar */}
      <aside className={cn(
        'fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        sidebarClassName
      )}>
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center justify-between px-4 border-b">
            {logo.href ? (
              <a href={logo.href} className="flex items-center gap-2 font-semibold">
                {logo.image && <img src={logo.image} alt={logo.text} className="h-6 w-6" />}
                {logo.text && <span>{logo.text}</span>}
              </a>
            ) : (
              <div className="flex items-center gap-2 font-semibold">
                {logo.image && <img src={logo.image} alt={logo.text} className="h-6 w-6" />}
                {logo.text && <span>{logo.text}</span>}
              </div>
            )}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded"
              onClick={() => setSidebarOpen(false)}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 space-y-1 px-2 py-4 overflow-y-auto">
            {navigation.main && navigation.main.length > 0 && (
              <div className="space-y-1">
                {navigation.main.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                        item.active
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      )}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      <span className="flex-1">{item.title}</span>
                      {item.badge !== undefined && (
                        <span className="ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gray-200 px-1 text-xs">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            )}

            {navigation.secondary && navigation.secondary.length > 0 && (
              <>
                <div className="my-4 border-t" />
                <div className="space-y-1">
                  {navigation.secondary.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        <span>{item.title}</span>
                      </a>
                    );
                  })}
                </div>
              </>
            )}
          </nav>

          {sidebarFooter && (
            <div className="border-t p-4">
              {sidebarFooter}
            </div>
          )}
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className={cn(
          'flex h-14 items-center gap-4 border-b bg-white px-4 lg:px-6',
          headerClassName
        )}>
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded"
            onClick={() => setSidebarOpen(true)}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {search.enabled && (
            <div className="flex-1 max-w-md">
              <div className="relative">
                <svg className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  placeholder={search.placeholder}
                  className="w-full rounded-lg border bg-gray-50 pl-8 pr-3 py-2 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>
            </div>
          )}

          <div className="ml-auto flex items-center gap-2">
            {headerActions}

            {notifications.enabled && (
              <button className="relative p-2 hover:bg-gray-100 rounded">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {notifications.count && notifications.count > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                    {notifications.count > 9 ? '9+' : notifications.count}
                  </span>
                )}
              </button>
            )}

            <div className="relative">
              <button
                className="relative flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-medium">
                    {user.initials}
                  </div>
                )}
                <div className="hidden lg:block text-left">
                  <div className="text-sm font-medium">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                </div>
                <svg className="h-4 w-4 text-gray-500 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {userMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setUserMenuOpen(false)} />
                  <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border bg-white shadow-lg">
                    <div className="p-2">
                      <div className="px-2 py-1.5 text-sm text-gray-900">
                        <div className="font-medium">{user.name}</div>
                        <div className="text-gray-500">{user.email}</div>
                      </div>
                      <div className="my-1 border-t" />
                      <button className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Profile
                      </button>
                      <button className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                      </button>
                      <div className="my-1 border-t" />
                      <button className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Log out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        <main className={cn(
          'flex-1 overflow-y-auto',
          padding && 'p-4 lg:p-6',
          mainClassName
        )}>
          <div className={cn('mx-auto', maxWidthClasses[maxWidth])}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}