export default function Post({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    
    // <!--Container-->
    <div className="container max-w-5xl mx-auto ">
      {/* -mt-32 */}
      <div className="mx-0 sm:mx-6">
        
        {/* <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal" style={{fontFamily:'Georgia,serif'}}> */}
          
          {/* <!--Post Content--> */}
          
  
          {/* <!--Lead Para--> */}
  
          {children}
          {/* <!--/ Post Content--> */}
              
        {/* </div> */}
        
        
    
    
  
    </div>
  
      </div>
  );
}
