import { useDashboardContext } from "./Provider";
import { useAuth } from 'wasp/client/auth';
import DropdownUser from '../../../DropdownUser';
import { Link, routes } from 'wasp/client/router';

export function TopBar() {
  const { openSidebar } = useDashboardContext();
  const { data: user, isLoading: isUserLoading } = useAuth();

  return (
    <header className="relative z-10 h-16 items-center bg-white shadow md:h-20">
      <div className="relative z-10 mx-auto flex h-full flex-col justify-center px-3 text-white">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="group relative flex h-full w-12 items-center">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              onClick={openSidebar}
              className="text-4xl text-gray-700 focus:outline-none lg:hidden"
            >
              &#8801;
            </button>
          </div>
          <div className="relative ml-5 mr-0 flex w-full items-center justify-end p-1 text-gray-700 sm:right-auto sm:mr-0">
            {isUserLoading ? null : !user ? (
              <a href={routes.LoginRoute.build()} className="text-sm font-semibold leading-6">
                Log in
              </a>
            ) : (
              <div className='ml-4'>
                <DropdownUser user={user} />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
