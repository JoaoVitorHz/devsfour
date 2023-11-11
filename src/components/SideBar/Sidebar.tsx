import { BiAddToQueue } from 'react-icons/bi';
import { BiSpreadsheet } from 'react-icons/bi';
import { MdSystemUpdateAlt } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdPlaylistAddCheck } from 'react-icons/md';

import { Menu } from './Menu';

export function Sidebar(){
    return(
        <div className="bg-white  h-screen fixed flex flex-col items-center p-5">
            
            <h1 className="text-3xl text-blue-500 mb-8 font-agbalumo">Devsfour</h1>

            <Menu/>
           
        </div>
    )
}