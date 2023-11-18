import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Preconfigured Setup for ShadCN with ReactJS
        </p>
        <p className=" text-2xl">Preconf by alanjames00</p>
        <p>Checkout my GitHub</p>
      </div>
      <div className="flex gap-4">
      
        <a
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
