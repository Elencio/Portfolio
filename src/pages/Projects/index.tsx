import { Data } from "@/utils/links";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Key, Star } from "lucide-react";


export default function Projects() {
    return (
        <>
            {
                Data.map((data) => {
                    return (
                        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8" key={data.id}>
                            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                                <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                                    <h1 className="mt-1 text-lg  font-semibold text-green-500 dark:text-[#c1ff72] md:text-2xl dark:sm:text-[#c1ff72]">
                                        {data.projectname}
                                    </h1>
                                </div>
                                <div className=" rounded-xl bg-gray-900/10 p-2 ring-1 ring-inset ring-gray-300/10 lg:m-4 grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                                    <img
                                        src={data.imagelink}
                                        alt=""
                                        className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                                        loading="lazy"
                                    />
                                </div>
                                <dl className="mt-4  gap-8 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">

                                    <div className="text-indigo-600 flex items-center dark:text-indigo-400">
                                      <Star />
                                        <span>
                                            4.89 <span className="text-slate-400 font-normal">(128)</span>
                                        </span>
                                    </div>
                                    <div className="flex items-center flex-row">
                                       <Key />
                                       {data.linguagens}
                                    </div>

                                </dl>

                                <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4 dark:text-gray-400">
                                    <p className="mb-2">
                                        {data.description}
                                    </p>
                                    <Link to={data.projectLink}>
                                        <Button variant="outline">ver projecto</Button>
                                    </Link>

                                </div>
                            </div>
                        </main>
                    )
                })


            }
        </>
    );
}
