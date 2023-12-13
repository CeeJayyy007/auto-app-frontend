import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CreateAccountForm from '@/components/authForms/CreateAccountForm';
import { Icons } from '@/components/icons';
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
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Icons.logo className="mr-2 h-6 w-6" />
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
            <div className="flex flex-col space-y-2 text-left">
              <h2 className="font-bold">
                {toggleAuth ? 'Welcome back!' : 'Get started!'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {toggleAuth
                  ? "Don't have an account?"
                  : 'Already have an account?'}
                <Button
                  variant="link"
                  onClick={() => setToggleAuth(!toggleAuth)}
                  className="pl-1"
                >
                  {toggleAuth ? 'Sign Up' : 'Sign In'}
                </Button>
              </p>
            </div>
            {/* auth form */}
            {toggleAuth ? <LoginForm /> : <CreateAccountForm />}
            <p className="px-4 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Button size="sm" variant="link" href="/terms">
                Terms of Service
              </Button>{' '}
              and{' '}
              <Button size="sm" variant="link" href="/privacy">
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
