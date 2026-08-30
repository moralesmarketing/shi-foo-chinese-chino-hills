import Image from "next/image";

export default function DietaryProgram() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,40,31,0.06),transparent_60%)]" />
      <div className="section relative grid items-center gap-14 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/kitchen.jpg"
            alt="Fresh vegetables prepped for made-to-order dishes at Shi Foo"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <div className="mb-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          <span className="eyebrow">Made Fresh, Made Safe</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            A Real Gluten-Free
            <br />
            Menu, Not an Afterthought
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            Every dish is cooked to order with non-GMO oils, and the
            kitchen keeps a dedicated gluten-free menu — including a GF
            version of the Orange Chicken. A Celiac family calls it their
            go-to spot with zero reactions across the board.
          </p>
          <p className="mt-4 max-w-md text-ink-soft">
            Vegetarian dishes are on the menu too, and most entrees can be
            adjusted meat-free on request.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="badge badge-red">Gluten-Free Menu</span>
            <span className="badge badge-gold">Non-GMO Oils</span>
            <span className="badge badge-green">Vegetarian Options</span>
          </div>
        </div>
      </div>
    </section>
  );
}
