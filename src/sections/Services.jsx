import { ServiceSlider } from "../components"

const Services = () => {
  return (
    <section className="bg-services bg-cover bg-no-repeat min-h-[862px] py-8">
      <div className="container mx-auto h-full">
        <h2 className="h2 mb-12">
          Our Services</h2>
          <ServiceSlider />
      </div>
    </section>
  )
}

export default Services