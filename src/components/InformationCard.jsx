import { useState } from 'react';
/**
 * Displays:
 *  - Title
 *  - Relevant dates
 *  - Total years of experience
 *  - Dropdown button
 *  - Dropdown content including a write up of experiences
 */

export const InformationCard = ({ title, startDate, endDate, experiences }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <div className="bg-white opacity-75 p-4 rounded-lg">
            {/* header contains two flex rows */}
            <div>
                {/* flex row 1, place and dates */}
                <div className="flex flex-row justify-between">
                    <div>Place</div>
                    <div>{startDate} - {endDate}</div>
                </div>

                {/* flex row 2, title and dropdown button */}
                <div className="flex flex-row justify-between">
                    <div>{title}</div>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* dropdown TODO Make max height a little more or driven from height of page*/}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                experiences
            </div>
            
        </div>
    );
};