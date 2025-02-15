const AboutSection = () => {
  return (
    <div className="text-start p-4 md:p-8 border border-[--main] rounded-[22px] font-[poppins] h-full md:h-auto flex items-center justify-start">
      <p className="md:text-2xl text-base text-[--main] font-light">
        We are a curated <span className="font-bold">online thrift store</span> that <br className="md:flex hidden" />
        connects you with unique, pre-loved  
        fashion pieces from <span className="text-[--main] font-bold">trusted sources.</span>
      </p>
    </div>
  );
};

export default AboutSection;
