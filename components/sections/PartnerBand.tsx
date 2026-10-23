import Button from "@/components/ui/Button";

export default function PartnerBand() {
  return (
    <section className="wrap mt-20">
      <div className="band flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 px-6 py-8 text-center lg:flex-row lg:px-12 lg:text-left">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Your external quality engineering partner
          </h2>
          <p className="mt-3 max-w-2xl text-gray-300">
            White-label testing and automation support, flexible QA capacity, and specialist expertise while you retain the client relationship.
          </p>
        </div>
        <Button href="/partners" variant="primary">
          Become a Partner
        </Button>
      </div>
    </section>
  );
}