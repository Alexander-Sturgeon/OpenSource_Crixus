//Here are a list of icons I grabbed from https://www.svgrepo.com/ 
//Specifically for use in the side bar. But if the need to use somewhere else arises go for it
import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement>;

export function HomeIcon(props: IconProps){
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}>
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>
    )
}

export function ShieldIcon(props: IconProps){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}>
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        </svg>
    )
}

//AI ASK Prof to see if its okay couldnt find a free one of these
export function ColosseumIcon(props: IconProps){
      return(
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}>
                  {/* Domed top of the amphitheatre */}
                  <path d="M3 9c0-3 4-5 9-5s9 2 9 5"/>
                  {/* Horizontal bands: top, tier divider, ground */}
                  <path d="M2 9h20"/>
                  <path d="M2 13h20"/>
                  <path d="M2 20h20"/>
                  {/* Upper tier columns */}
                  <path d="M6 9v4M10 9v4M14 9v4M18 9v4"/>
                  {/* Lower tier arches */}
                  <path d="M4 20v-2a2 2 0 0 1 4 0v2"/>
                  <path d="M10 20v-2a2 2 0 0 1 4 0v2"/>
                  <path d="M16 20v-2a2 2 0 0 1 4 0v2"/>
          </svg>
      )
  }

  export function AboutIcon(props:IconProps){
    return(
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}>
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4"/>
            <path d="M12 8h.01"/>
        </svg>
    )
  }
//AI ASK Prof to see if its okay couldnt find a free one of these
  export function SpartanHelmetIcon(props: IconProps){
      return(
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}>
                  {/* Plume crest arcing over the top */}
                  <path d="M7 7c1-4 9-4 10 0"/>
                  <path d="M9 4.5 8 7M12 3.5v3M15 4.5 16 7"/>
                  {/* Helmet dome */}
                  <path d="M5 12a7 7 0 0 1 14 0"/>
                  {/* Cheek guards curving down to the chin */}
                  <path d="M5 12v2c0 3 2 6 7 7 5-1 7-4 7-7v-2"/>
                  {/* Brow bar */}
                  <path d="M5 12h14"/>
                  {/* Nose guard */}
                  <path d="M12 12v7"/>
                  {/* Eye slots */}
                  <path d="M8 14.5h2M14 14.5h2"/>
          </svg>
      )
  }