import Questions from "./Questions";

const Substepsstep = (props) => {
  const { data } = props;

  if (!data) return;

  return (
    <div>
      <div>
        <div className=" bg-[#151111] flex flex-col justify-center items-center ">
          <div className="w-[95%]">
            <div className="w-[100%] -mt-1 flex flex-col my-4 bg-[#151111] shadow-lg p-4 text-white rounded-lg ">
              <div className=" w-[100%]">
                {
                  // Question box

                  <div className="border border-neutral-700 rounded-lg p-2 mt-10 text-sm font-semibold text-white ">
                    <div className="flex items-center justify-start px-4">
                      <div className="flex justify-start items-center w-[40%] mr-10 ">PROBLEM</div>
                      <div className="flex justify-center items-center w-[12%] mr-5 ">CODE STUDIO</div>
                      <div className="flex justify-center items-center w-[12%] mr-5 ">LEETCODE</div>
                      <div className="flex justify-center items-center w-[12%] mr-5 " >YOUTUBE</div>
                      <div className="flex justify-center items-center w-[12%] mr-5" >DIFFICULTY</div>
                    </div>

                    {data.map((q) => (
                      <Questions key={data.id} data={q} />
                    ))}
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Substepsstep;
