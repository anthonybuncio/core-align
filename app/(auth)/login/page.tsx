import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background gradient — always dark, regardless of site theme */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-950 to-zinc-900 pointer-events-none" />

      {/* Subtle radial glow — always dark, regardless of site theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-150 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 py-10 md:py-20 max-w-lg px-4 sm:px-0 mx-auto w-full">
        <Card className="light max-w-lg px-6 py-8 sm:p-12 relative gap-6 rounded-2xl border-zinc-200 bg-white shadow-2xl shadow-zinc-950/10">
          <CardHeader className="text-center gap-6 p-0">
            <div className="mx-auto w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-zinc-200">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </div>
            <div className="flex flex-col gap-1">
              <CardTitle
                className="text-2xl font-bold tracking-tight text-zinc-950"
                style={{ fontFamily: "var(--font-cal-sans), sans-serif" }}
              >
                Welcome to CoreAlign
              </CardTitle>
              <CardDescription className="text-sm text-zinc-600 font-normal">
                Login to your account now.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <form>
              <FieldGroup className="gap-6">
                <Field className="grid md:grid-cols-2 md:gap-6 gap-3">
                  <Button
                    variant="outline"
                    type="button"
                    className="text-sm font-medium text-zinc-700 hover:text-zinc-950 gap-2 rounded-full h-9 shadow-xs cursor-pointer border-zinc-300 bg-transparent hover:bg-zinc-100 hover:border-zinc-400 dark:bg-transparent dark:hover:bg-zinc-100"
                  >
                    <img
                      src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                      alt="google icon"
                      className="h-4 w-4"
                    />
                    Sign in with Google
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    className="text-sm font-medium text-zinc-700 hover:text-zinc-950 gap-2 rounded-full h-9 shadow-xs cursor-pointer border-zinc-300 bg-transparent hover:bg-zinc-100 hover:border-zinc-400 dark:bg-transparent dark:hover:bg-zinc-100"
                  >
                    <img
                      src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
                      alt="github icon"
                      className="h-4 w-4"
                    />
                    Sign in with Github
                  </Button>
                </Field>
                <FieldSeparator className="*:data-[slot=field-separator-content]:bg-white text-sm bg-transparent">
                  <span className="px-4">or sign in with</span>
                </FieldSeparator>

                <div className="flex flex-col gap-4">
                  <Field className="gap-1.5">
                    <FieldLabel
                      htmlFor="email"
                      className="text-sm text-zinc-600 font-normal"
                    >
                      Email*
                    </FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@shadcnspace.com"
                      required
                      className="h-9 shadow-xs rounded-lg dark:bg-transparent dark:text-zinc-600"
                    />
                  </Field>
                  <Field className="gap-1.5">
                    <FieldLabel
                      htmlFor="password"
                      className="text-sm text-zinc-600 font-normal"
                    >
                      Password*
                    </FieldLabel>

                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      required
                      className="h-9 shadow-xs rounded-lg dark:bg-transparent dark:text-zinc-600"
                    />
                  </Field>
                </div>

                <Field orientation="horizontal" className="justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="terms"
                      defaultChecked
                      className="cursor-pointer"
                    />
                    <FieldLabel
                      htmlFor="terms"
                      className="text-sm text-zinc-700 font-normal cursor-pointer"
                    >
                      Remember this device
                    </FieldLabel>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-zinc-950 font-medium text-end"
                  >
                    Forgot password?
                  </a>
                </Field>

                <Field className="gap-4">
                  <Button
                    type="submit"
                    size={"lg"}
                    className="rounded-full h-10 bg-zinc-950 text-white hover:bg-zinc-800 shadow-md shadow-zinc-950/10 cursor-pointer"
                  >
                    Sign in
                  </Button>
                  <FieldDescription className="text-center text-sm font-normal text-zinc-600">
                    Don&apos;t have an account?{" "}
                    <a
                      href="/register"
                      className="font-medium text-zinc-950 no-underline!"
                    >
                      Create an account
                    </a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoginPage;
