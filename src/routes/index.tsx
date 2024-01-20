import ContactMe from '@/components/Contactme'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import { DefaultLayout } from '@/layout'
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
                path: '/contact-me',
                element: <ContactMe />
            },

        ],
    },


])

export function Routes() {
    return <RouterProvider router={router} />
}