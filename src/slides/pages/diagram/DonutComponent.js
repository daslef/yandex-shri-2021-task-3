export default function DonutComponent(total, diff, categories) {

    const SETTINGS = {
        cx: 170,
        cy: 170,		      
        radius: 144,
        strokeWidth: 51,
    }

    const values = categories
        .map(category => category.valueText)
        .map(category => {
            const spaceIndex = category.indexOf(' ')
            return parseInt(category.substring(0, spaceIndex))
        })

    const l =  2 * Math.PI * SETTINGS.radius
    const valuesSum = values.reduce((acc, val) => acc + val)

    function dashArray(value) {
        const dash = value / valuesSum*l
        return [dash, l-dash]
    }

    const dashArrayValues = values.map(value => dashArray(value))

    const offsetValues = [
        0, 
        dashArrayValues[0][1], 
        dashArrayValues[0][1] + dashArrayValues[1][1], 
        dashArrayValues[0][1] + dashArrayValues[1][1] + dashArrayValues[2][1] 
    ]

    return `<div class="diagram__donut">
            <svg width="100%" height="100%" viewBox="0 0 340 340" class="diagram__donut__svg">
  
            <defs>
              <filter id="filter0_dii" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"></feMorphology>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0.575 0 0 0 0 0.365803 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0.791667 0 0 0 0 0.504028 0 0 0 0 0 0 0 0 0.9 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dx="-1" dy="1"></feOffset>
                <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"></feBlend>
                </filter>
                
              <filter id="filter1_dii" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"></feMorphology>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0.2 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0.9 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dx="-1" dy="1"></feOffset>
                <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"></feBlend>
              </filter>
              
              <filter id="filter2_dii" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"></feMorphology>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0.9 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dx="-1" dy="1"></feOffset>
                <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"></feBlend>
              </filter>
              
              <filter id="filter3_dii" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"></feMorphology>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.618715 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.636666 0 0 0 0 0 0 0 0 0.9 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dx="-1" dy="1"></feOffset>
                <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"></feBlend>
              </filter>
              
              <filter id="filter0_ii" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.69 0 0 0 0 0.225 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="0.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
              </filter>
              
              <filter id="filter1_ii" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.5125 0 0 0 0 0.5125 0 0 0 0 0.5125 0 0 0 0.6 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="0.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
              </filter>
              
              <filter id="filter2_ii" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.4125 0 0 0 0 0.4125 0 0 0 0 0.4125 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="0.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
              </filter>
            
              <filter id="filter3_ii" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.69 0 0 0 0 0.225 0 0 0 0.9 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="0.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
              </filter>
            
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.486 164.514) rotate(90) scale(163.486)">
              <stop offset="0.8125" stop-color="#FFB800" stop-opacity="0.4"/>
              <stop offset="1" stop-color="#FFEF99" stop-opacity="0.2"/>
              </radialGradient>
            
              <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.486 164.514) rotate(90) scale(163.486)">
              <stop offset="0.828125" stop-color="#BFBFBF" stop-opacity="0.69"/>
              <stop offset="0.921875" stop-color="#E4E4E4" stop-opacity="0.2"/>
              </radialGradient>
            
              <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.486 164.514) rotate(90) scale(163.486)">
              <stop offset="0.828125" stop-color="#A6A6A6" stop-opacity="0.69"/>
              <stop offset="0.921875" stop-color="#CBCBCB" stop-opacity="0.2"/>
              </radialGradient>
            
              <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.486 164.514) rotate(90) scale(163.486)">
              <stop offset="0.8125" stop-color="#FFB800" stop-opacity="0.7"/>
              <stop offset="1" stop-color="#FFEF99" stop-opacity="0.4"/>
              </radialGradient>

              <radialGradient id="paint0d_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(175.486 176.514) rotate(90) scale(163.486)">
                <stop offset="0.729167" stop-color="#7B4E00"></stop>
                <stop offset="1" stop-color="#0F0900"></stop>
              </radialGradient>
              
              <radialGradient id="paint1d_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(175.486 176.514) rotate(90) scale(163.486)">
                <stop offset="0.71875" stop-color="#3D3931"></stop>
                <stop offset="1" stop-color="#3D3931"></stop>
              </radialGradient>
              
              <radialGradient id="paint2d_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(175.486 176.514) rotate(90) scale(163.486)">
                <stop offset="0.71875" stop-color="#5B5B57"></stop>
                <stop offset="1" stop-color="#3D3931"></stop>
              </radialGradient>
              
              <radialGradient id="paint3d_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(175.486 176.514) rotate(90) scale(163.486)">
                <stop offset="0.71875" stop-color="#FFA300"></stop>
                <stop offset="1" stop-color="#5B3A00"></stop>
              </radialGradient>
            </defs>
            
            
            <g class="diagram__donut--dark" filter="url(#filter3_dii)">
              <circle 
                      class="donut-segment" 
                      cx="170" 
                      cy="170" 
                      r="144" 
                      fill="transparent" 
                      stroke-width="51"
                      stroke-dasharray="149.13934355503193 755.6393406788285"
                      stroke-dashoffset="0"
                      stroke="url(#paint3d_radial)"
                      stroke-opacity="0.8"
               ></circle>
            </g>

            <g class="diagram__donut--light" filter="url(#filter3_ii)">
                <circle 
                    class="donut-segment" 
                    cx="170" 
                    cy="170" 
                    r="144" 
                    fill="transparent" 
                    stroke-width="51"
                    stroke-dasharray="149.13934355503193 755.6393406788285"
                    stroke-dashoffset="0"
                    stroke="url(#paint3_radial)"
                    stroke-opacity="0.8"
                ></circle>
            </g>
            
            <g class="diagram__donut--dark" filter="url(#filter0_dii)">
              <circle 
                    class="donut-segment" 
                    cx="170" 
                    cy="170" 
                    r="144" 
                    fill="transparent" 
                    stroke-width="51"
                    stroke-dasharray="159.08196645870075 745.6967177751596"
                    stroke-dashoffset="755.6393406788285"
                    stroke="url(#paint0d_radial)"
                    stroke-opacity="0.8"
             ></circle>
            </g>

            <g class="diagram__donut--light" filter="url(#filter0_ii)">
                <circle 
                    class="donut-segment" 
                    cx="170" 
                    cy="170" 
                    r="144" 
                    fill="transparent" 
                    stroke-width="51"
                    stroke-dasharray="159.08196645870075 745.6967177751596"
                    stroke-dashoffset="755.6393406788285"
                    stroke="url(#paint0_radial)"
                    stroke-opacity="0.8"
            ></circle>
            </g>
            
            <g class="diagram__donut--dark" filter="url(#filter2_dii)">
                <circle 
                    class="donut-segment" 
                    cx="170" 
                    cy="170" 
                    r="144" 
                    fill="transparent" 
                    stroke-width="51"
                    stroke-dasharray="288.33606420639506 616.4426200274654"
                    stroke-dashoffset="1501.3360584539882"
                    stroke="url(#paint2d_radial)"
                    stroke-opacity="0.8"
                ></circle>
            </g>  

            <g class="diagram__donut--light" filter="url(#filter2_ii)">
                <circle 
                    class="donut-segment" 
                    cx="170" 
                    cy="170" 
                    r="144" 
                    fill="transparent" 
                    stroke-width="51"
                    stroke-dasharray="288.33606420639506 616.4426200274654"
                    stroke-dashoffset="1501.3360584539882"
                    stroke="url(#paint2_radial)"
                    stroke-opacity="0.8"
             ></circle>
            </g>  
            
            <g class="diagram__donut--dark" filter="url(#filter1_dii)">
                <circle 
                    class="donut-segment" 
                    cx="170" 
                    cy="170" 
                    r="144" 
                    fill="transparent" 
                    stroke-width="51"
                    stroke-dasharray="308.2213100137327 596.5573742201277"
                    stroke-dashoffset="2117.7786784814534"
                    stroke="url(#paint1d_radial)"
                    stroke-opacity="0.8"
             ></circle>
            </g>

            <g class="diagram__donut--light" filter="url(#filter1_ii)">
                <circle 
                    class="donut-segment" 
                    cx="170" 
                    cy="170" 
                    r="144" 
                    fill="transparent" 
                    stroke-width="51"
                    stroke-dasharray="308.2213100137327 596.5573742201277"
                    stroke-dashoffset="2117.7786784814534"
                    stroke="url(#paint1_radial)"
                    stroke-opacity="0.8"
             ></circle>
            </g>
            
          </svg>

            <div class="diagram__donut__text">
                <div class="diagram__donut__total">${total}</div>
                <div class="diagram__donut__diff">${diff}</div>
            </div>
        </div>`
    
}