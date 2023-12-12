import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CreateAccountForm from '@/components/authForms/CreateAccountForm';
import { cn } from '@/lib/utils';
import LoginForm from '@/components/authForms/LoginForm';

const Authentication = () => {
  const [toggleAuth, setToggleAuth] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <img
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Button
          variant="ghost"
          className={cn('absolute right-4 top-4 md:right-8 md:top-8')}
          onClick={() => setToggleAuth(!toggleAuth)}
        >
          Go to {toggleAuth ? 'Create Account =>' : 'Login =>'}
        </Button>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Auto App
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Best for auto service with excellent delivery
                everytime.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {toggleAuth ? 'Log in' : 'Create an account'}
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to{' '}
                {toggleAuth ? 'login' : 'create your account'}.
              </p>
            </div>
            {/* auth form */}
            {toggleAuth ? <LoginForm /> : <CreateAccountForm />}
            <p className="px-4 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Button
                size="sm"
                variant="link"
                href="/terms"
                className="underline hover:text-blue-500"
              >
                Terms of Service
              </Button>{' '}
              and{' '}
              <Button
                size="sm"
                variant="link"
                href="/privacy"
                className="underline hover:text-blue-500"
              >
                Privacy Policy
              </Button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
