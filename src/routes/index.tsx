import Hero from '@/components/Hero'
import Resume from '@/components/Resume'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import { DefaultLayout } from '@/layout'
import Projects from '@/pages/Projects'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'




const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Hero />
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/work-experience',
                element: <WorkExperience />
            },
            {
                path: '/projectos',
                element: <Projects />
            },
            {
                path: '/resume',
                element: <Resume />
            },

        ],
    },


])

export function Routes() {
    return <RouterProvider router={router} />
}