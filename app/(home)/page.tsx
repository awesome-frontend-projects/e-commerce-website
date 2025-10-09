import CountdownTimer from "@/components/CountdownTimer";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { TabsTrigger } from "@/components/ui/tabs";
import {
  categoryCardItems,
  newArrivalItems,
  productItems,
  tabsContentItems,
  tabsTriggerItems,
} from "@/data/data";
import { Tabs, TabsContent, TabsList } from "@radix-ui/react-tabs";
import { ArrowRight, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mt-11">
        <div className="container grid gap-6 sm:grid-cols-12">
          {/* box 1 */}
          <div className="hidden lg:block lg:col-span-4 bg-gradient-to-b from-purple-700 to-blue-900 p-8  rounded-lg">
            {/* Img */}
            <div>
              <Image
                src={"/images/hero-img-1.png"}
                alt="hero image one"
                width={300}
                height={155}
              />
            </div>
            {/* content */}
            <div className="text-white space-y-1.5">
              <p className="text-4xl font-semibold font-sans">
                Special{" "}
                <span className="text-base font-normal">Controller</span>
              </p>
              <p>Collection</p>
              <p>Up To</p>
              <span className="font-semibold text-4xl font-sans">60% Off</span>
              <Link
                href={""}
                className="flex items-center mt-1.5 gap-1 py-2 hover:underline max-w-max"
              >
                Shop now
                <span>
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>
          </div>
          {/* box 2 */}
          <div className="sm:col-span-12 lg:col-span-8 -order-1 lg:order-none grid sm:grid-cols-2 md:items-center bg-gray-200/80 p-11 rounded-lg">
            {/* Content */}
            <div>
              <p className="text-sm sm:text-base bg-amber-400 rounded-full max-w-max px-5 py-1 mb-2">
                Weekend Discount
              </p>
              <h1 className="text-4xl lg:text-[52px] font-bold leading-none">
                <span className="font-normal block">Stereo</span> Headphone.
              </h1>
              <p className="mt-2.5 mb-3.5">
                Last call for up to <span className="text-red-500">25%</span>{" "}
                off!
              </p>

              <Button size="lg" className="rounded-full">
                Shop now
              </Button>
            </div>
            {/* Image */}
            <div className="max-w-max mx-auto">
              <Image
                src={"/images/hero-img-2.png"}
                width={324}
                height={303}
                alt="hero image-two"
              />
            </div>
          </div>
          {/* box 3 */}
          <div className="md:col-span-6 lg:col-span-6 flex items-center  justify-between lg:pl-11 border border-gray-300 rounded-lg pl-8 pt-4">
            {/* Content */}
            <div className="space-y-2">
              <p>Weekend Discount</p>
              <h2 className="font-semibold text-4xl">Stereo Speaker</h2>
              <p>Don’t miss the last opportunity.</p>
              <Link
                href={""}
                className="flex items-center hover:text-purple-700 transition-colors"
              >
                Shop Now{" "}
                <span>
                  <ArrowRight size={"18"} />
                </span>
              </Link>
            </div>
            {/* Image */}
            <div className="max-w-max ml-auto">
              <Image
                src={"/images/hero-img-3.png"}
                width={215}
                height={253}
                alt="Hero image 03"
              />
            </div>
          </div>
          {/* box 4 */}
          <div className="md:col-span-6 lg:col-span-6 flex items-center  justify-between lg:pl-11 border border-gray-300 rounded-lg pl-8 pt-4">
            {/* Content */}
            <div className="space-y-2">
              <p>Weekend Discount</p>
              <h2 className="font-semibold text-4xl">Home Speaker</h2>
              <p>Don’t miss the last opportunity.</p>
              <Link
                href={""}
                className="flex items-center hover:text-purple-700 transition-colors"
              >
                Shop Now{" "}
                <span>
                  <ArrowRight size={"18"} />
                </span>
              </Link>
            </div>
            {/* Image */}
            <div>
              <Image
                src={"/images/hero-img-4.png"}
                width={215}
                height={253}
                alt="Hero image 04"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Category */}
      <section className="section pb-28 lg:pb-32">
        <div className="container">
          {/* Title */}
          <Title subtitle="category" title="category" />
          {/* Card wrapper */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 lg:grid-cols-6 mt-12">
            {categoryCardItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-xl flex items-center justify-center flex-col py-7 hover:bg-gray-50 transition-colors"
              >
                <span>
                  <item.icon size={65} strokeWidth={1} />
                </span>
                <h3 className="font-bold">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="section bg-[#f4fef3] lg:pb-32">
        <div className="container">
          {/* Title */}
          <Title subtitle="Featured" title="Featured Product." />
          {/* Wrapper */}
          <div className="grid gap-3.5 lg:grid-cols-4 mt-20">
            {productItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrival */}
      <section className="section">
        <div className="container">
          {/* Title */}
          <Title subtitle="new arrival" title="New Arrival Product." />

          {/* Card wrapper */}
          <div className="grid gap-3.5 lg:grid-cols-4 mt-20">
            {newArrivalItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Deals */}
      <section className="section pb-28">
        <div className="container">
          {/* title */}
          <Title subtitle="TODAY’S BEST DEAL" title="Deals of the day" />

          {/* wrapper */}
          <div className="bg-gradient-to-b from-purple-700 to-blue-900 flex flex-col lg:flex-row lg:justify-between lg:items-center px-20 py-6 rounded-xl mt-7">
            {/* Content */}
            <div>
              <h5 className="text-white text-4xl font-bold">Smart Headphone</h5>
              {/* Count down */}
              <div className="mt-8 mb-10">{/* <CountdownTimer /> */}</div>
              <Button variant={"secondary"} size={"lg"}>
                <span>
                  <PlusCircle />
                </span>
                Add to cart
              </Button>
            </div>
            {/* Image */}
            <div>
              <Image
                src={"/images/section-img.png"}
                width={500}
                height={500}
                alt="section image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best seller */}
      <section className="section bg-[#f4fef3] lg:pb-32">
        <div className="container">
          {/* Title */}
          <Title subtitle="BEST SELLER" title="Best seller items" />
          {/* Wrapper */}
          <div className="mt-12">
            <Tabs className="grid lg:grid-cols-12 gap-3" defaultValue="Camera">
              <div className="col-span-3">
                <TabsList className="border bg-white  rounded-xl">
                  {tabsTriggerItems.map((item) => (
                    <TabsTrigger
                      value={item.label}
                      key={item.id}
                      className="w-full justify-start py-6 px-10 data-[state=active]:bg-purple-700 data-[state=active]:text-gray-100 text-base"
                    >
                      <span>
                        <item.icon size={30} />
                      </span>
                      {item.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <div className="col-span-9">
                {tabsContentItems.map((item) => (
                  <TabsContent
                    key={item.id}
                    value={item.value}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {item.list.map((item, index) => (
                      <ProductCard key={index} {...item} />
                    ))}
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
