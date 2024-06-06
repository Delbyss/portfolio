/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qRO5xZzG9cB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"

export default function Connaissance() {
  return (
    <section className="w-full space-y-12 px-56 py-10">
      <h2 className="text-2xl font-bold">Compétence</h2>
      <div>
        <h3 className="text-xl font-semibold mb-4">Langage de programmation</h3>
        <div className="flex justify-around bg-gray-100 p-4 rounded-md">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-white rounded-full p-2 group">
                  <svg className="h-16 w-16 fill-current text-black group-hover:text-yellow-500 transition-colors duration-300" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
                  </svg>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Python</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-white rounded-full p-2 group">
                  <svg className="h-16 w-16 fill-current text-black group-hover:text-purple-500 transition-colors duration-300" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" />
                  </svg>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>C#</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
              <div className="bg-white rounded-full p-2 group">
                  <svg className="h-16 w-16 fill-current text-black group-hover:text-orange-500 transition-colors duration-300" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                  </svg>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>HTML5</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
              <div className="bg-white rounded-full p-2 group">
                  <svg className="h-16 w-16 fill-current text-black group-hover:text-blue-500 transition-colors duration-300" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                  </svg>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>CSS3</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
              <div className="bg-white rounded-full p-2 group">
                  <svg className="h-16 w-16 fill-current text-black group-hover:text-yellow-500 transition-colors duration-300" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                  </svg>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>JavaScript</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
              <div className="bg-white rounded-full p-2 group">
                  <svg className="h-16 w-16 fill-current text-black group-hover:text-indigo-500 transition-colors duration-300" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
                  </svg>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>PHP</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">FrameWork</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded-md">.NET</div>
          <div className="bg-gray-200 p-4 rounded-md">Symfony</div>
          <div className="bg-gray-200 p-4 rounded-md">React JS</div>
          <div className="bg-gray-200 p-4 rounded-md">Next JS</div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Outil</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded-md">Git et Github</div>
          <div className="bg-gray-200 p-4 rounded-md">WordPress</div>
          <div className="bg-gray-200 p-4 rounded-md">VisualStudio</div>
          <div className="bg-gray-200 p-4 rounded-md">Figma</div>
          <div className="bg-gray-200 p-4 rounded-md">LibreOffice</div>
          <div className="bg-gray-200 p-4 rounded-md">Office</div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Connaissance diverse</h3>
        <div className="flex space-x-4">
          <Badge variant="secondary" className="text-lg bg-gray-500 text-white hover:text-gray-500">
            Réseau informatique
          </Badge>
          <Badge variant="secondary" className="text-lg bg-green-500 text-white hover:text-green-500">
            Cybersécurité
          </Badge>
          <Badge variant="secondary" className="text-lg bg-orange-500 text-white hover:text-orange-500">
            Linux
          </Badge>
          <Badge variant="secondary" className="text-lg  bg-blue-500 text-white hover:text-blue-500">
            Windows
          </Badge>
        </div>
      </div>
    </section>
  )
}
