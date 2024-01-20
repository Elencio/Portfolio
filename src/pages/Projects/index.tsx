import { Data } from "@/utils/links";
import { Button } from "@/components/ui/button";


export default function Projects() {
    return (
        <>
            {
                Data.map((data) => {
                    return (
                        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8" key={data.id}>
                            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                                <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                                    <h1 className="mt-1 text-lg  font-semibold text-[#c1ff72] sm:text-[#c1ff72] md:text-2xl dark:sm:text-[#c1ff72]">
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
                                <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                                    <dt className="sr-only">Reviews</dt>
                                    <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
                                        <svg
                                            width="24"
                                            height="24"
                                            fill="none"
                                            aria-hidden="true"
                                            className="mr-1 stroke-current dark:stroke-indigo-500"
                                        >
                                            <path
                                                d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <span>
                                            4.89 <span className="text-slate-400 font-normal">(128)</span>
                                        </span>
                                    </dd>
                                    <dt className="sr-only">Location</dt>
                                    <dd className="flex items-center">
                                        <svg
                                            width="2"
                                            height="2"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            className="mx-3 text-gray-400"
                                        >
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <svg
                                            width="24"
                                            height="24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="mr-1 text-slate-400 dark:text-slate-500"
                                            aria-hidden="true"
                                        >
                                            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                        </svg>
                                        {data.linguagens}
                                    </dd>

                                </dl>

                                <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4 text-gray-400">
                                    <p className="mb-2">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa reprehenderit inventore nulla
                                        deserunt, ad officiis iste. Maxime, eum repellat dolorem odio, dolorum temporibus, quaerat debitis
                                        repudiandae veritatis eaque blanditiis ullam.
                                    </p>
                                    <Button variant="outline">ver projecto</Button>
                                </div>
                            </div>
                        </main>
                    )
                })


            }
        </>
    );
}