import React from 'react'


const images = [{
    id:1,
    url:"https://v3img.voot.com/resizeMedium,w_307,h_307/v3Storage/assets/colors-hindi-1709289885743.png"
},
{
    id:2,
    url:"https://v3img.voot.com/resizeMedium,w_307,h_307/v3Storage/assets/colors-hindi-1709289885743.png"
},
{
    id:3,
    url:"https://v3img.voot.com/resizeMedium,w_307,h_307/v3Storage/assets/colors-hindi-1709289885743.png"
},
{
    id:4,
    url:"https://v3img.voot.com/resizeMedium,w_307,h_307/v3Storage/assets/colors-hindi-1709289885743.png"
},
{
    id:5,
    url:"https://v3img.voot.com/resizeMedium,w_307,h_307/v3Storage/assets/colors-hindi-1709289885743.png"
},
{
    id:6,
    url:"https://v3img.voot.com/resizeMedium,w_307,h_307/v3Storage/assets/colors-hindi-1709289885743.png"
},
{
    id:7,
    url:"https://v3img.voot.com/resizeMedium,w_307,h_307/v3Storage/assets/colors-hindi-1709289885743.png"
},
{
    id:8,
    url:"https://v3img.voot.com/resizeMedium,w_307,h_307/v3Storage/assets/colors-hindi-1709289885743.png"
},
{
    id:9,
    url:"https://v3img.voot.com/resizeMedium,w_307,h_307/v3Storage/assets/colors-hindi-1709289885743.png"
},
{
    id:10,
    url:"https://v3img.voot.com/resizeMedium,w_307,h_307/v3Storage/assets/colors-hindi-1709289885743.png"
}
]
const MiniCard = () => {
  return (
    <div className='flex p-4'>
        <div className='h-28 w-28 flex gap-3'>
           {images.map((image)=>(
            <img  src={image.url} key={image.id}/>
           ))}
        </div>
    </div>
  )
}

export default MiniCard;