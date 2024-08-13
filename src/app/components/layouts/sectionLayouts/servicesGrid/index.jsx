import CustomButton from "@/app/components/globals/customButton";
import { services, whyChooseUs2 } from "@/app/utils/dataStructures";


const ServicesGrid = ({data}) => {
    return (
      <div className="my-grid2">
        {data.slice(0, 4).map((service, index) => {
          return (
            <div key={service.id} className="col-center-around text-bgShade h-[22em] text-center rounded-[2em] p-6 dark:bg-gradient-dark shadow-lg">
              <div className="text-center justify-center flex py-5 text-[3rem]">{service.icon}</div>
              <h6 className="mb-3 font-bold">{service.service}</h6>
              <p className="text-sm my-3">{service.description}</p>
              <div className="w-full flex py-2 justify-center">
                <CustomButton href={service.href} text="Learn more" />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  export default ServicesGrid;