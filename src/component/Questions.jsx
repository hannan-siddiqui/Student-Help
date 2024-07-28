import { Link } from "react-router-dom";
import LEETCODELOGO from "../utils/LEETCODELOGO";
import { useSelector } from "react-redux";
import { useState } from "react";

const Questions = (props) => {
    const user = useSelector(store => store.user?.userInfo);
    const { data } = props;

    // State to keep track of solved questions
    // const [solvedQuestions, setSolvedQuestions] = useState({});

    // Handler to toggle the checkbox state
    // const handleCheckboxChange = (title) => {
    //     console.log(title)

    //     // setSolvedQuestions(prevState => ({
    //     //     ...prevState,
    //     //     [questionId]: !prevState[questionId]
    //     // }));
    // };

    
    return (
        <div className="px-4">
            <div className="mt-10 text-sm font-semibold text-white">
                <div className="flex items-center justify-start">

                    {/* <div className="flex justify-center items-center w-[12%]">
                        <input
                            type="checkbox"
                            checked={!!solvedQuestions[data.id]}
                            onChange={() => handleCheckboxChange(data.question_title)}
                            
                        />
                    </div> */}

                    <div className="flex justify-start items-center w-[40%] mr-8">
                        {data.question_title}
                    </div>
                    <div className="flex justify-center items-center w-[12%] mr-4">
                        <Link to={data.cs_link} target="__blank">
                            {data.cs_link && (
                                <img
                                    className="w-8 h-8"
                                    src="https://takeuforward-content-images.s3.ap-south-1.amazonaws.com/content/codestudio-ZJxLZjiy"
                                    alt=""
                                />
                            )}
                        </Link>
                    </div>
                    <div className="flex justify-center items-center w-[12%] mr-5">
                        <Link to={data.lc_link} target="__blank">
                            {data.lc_link && <LEETCODELOGO />}
                        </Link>
                    </div>
                    <div className="flex justify-center items-center w-[12%] mr-5">
                        <Link to={data.yt_link} target="__blank">
                            {data.yt_link && (
                                <svg
                                    width="24"
                                    height="20"
                                    viewBox="0 0 26 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.4 14.403L17.147 10.3651L10.4 6.3272V14.403ZM25.428 3.86409C25.597 4.49669 25.714 5.34465 25.792 6.42142C25.883 7.49819 25.922 8.4269 25.922 9.23448L26 10.3651C26 13.3127 25.792 15.4797 25.428 16.8661C25.103 18.0774 24.349 18.8581 23.179 19.1946C22.568 19.3696 21.45 19.4907 19.734 19.5715C18.044 19.6657 16.497 19.706 15.067 19.706L13 19.7868C7.553 19.7868 4.16 19.5715 2.821 19.1946C1.651 18.8581 0.897 18.0774 0.572 16.8661C0.403 16.2335 0.286 15.3855 0.208 14.3087C0.117 13.232 0.0779999 12.3033 0.0779999 11.4957L0 10.3651C0 7.41743 0.208 5.25043 0.572 3.86409C0.897 2.65273 1.651 1.87207 2.821 1.53558C3.432 1.36061 4.55 1.23947 6.266 1.15871C7.956 1.0645 9.503 1.02412 10.933 1.02412L13 0.943359C18.447 0.943359 21.84 1.15871 23.179 1.53558C24.349 1.87207 25.103 2.65273 25.428 3.86409Z"
                                        fill="#FF0000"
                                    />
                                </svg>
                            )}
                        </Link>
                    </div>
                    <div className="flex justify-center items-center w-[12%]">
                        {data.difficulty === 0 ? (
                            <div className="bg-green-950 rounded-2xl px-2 py-1">
                                <div className="text-green-500 font-semibold">Easy</div>
                            </div>
                        ) : data.difficulty === 1 ? (
                            <div className="bg-yellow-950 rounded-2xl px-2 py-1">
                                <div className="text-yellow-500">Medium</div>
                            </div>
                        ) : (
                            <div className="bg-red-950 rounded-2xl px-2 py-1">
                                <div className="text-red-500">Hard</div>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Questions;
