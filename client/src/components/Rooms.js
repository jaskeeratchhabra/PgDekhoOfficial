import React, { useState ,useEffect} from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Rooms = ({ room }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [isHovered, setIsHovered] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const handleNextImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.imageurls.length);
  // };

  // const handlePrevImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === 0 ? room.imageurls.length - 1 : prevIndex - 1
  //   );
  // };

  const handleMouseOver=()=>{

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.imageurls.length);
    }, 1000);
    
    setIntervalId(intervalId);
  };
  
  const handleMouseOut = () => {
    clearInterval(intervalId);
  };
  
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.imageurls.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? room.imageurls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" h-96 w-96 p-2 rounded-lg shadow-lg mx-5 my-8 dark:bg-white">
      <h2 className="text-lg font-bold  text-gray-800 p-2 truncate">{room.name}</h2>
      <div className="relative flex-grow">
        <img 
           onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}
           src={room.imageurls[currentImageIndex]} 
           alt="Room" 
           className="w-full h-full object-cover"
         />

        <button onClick={handlePrevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button onClick={handleNextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="p-2 flex justify-between">
        <div>
          <p className="text-sm font-bold text-gray-800">Type: <span className="text-gray-600">{room.type}</span></p>
          <p className="text-sm font-bold text-gray-800">Max Count: <span className="text-gray-600">{room.maxcount}</span></p>
          <p className="text-sm font-bold text-gray-800">Rent: <span className="text-gray-600">₹{room.rentperday}/month</span></p>
        </div>
        <div>
          <Button onClick={handleShow} className="text-sm bg-gray-800 text-white rounded-md px-2 py-1 mt-2 mr-2 focus:outline-none">
            View Details
          </Button>
          <Link to={`/book/${room._id}`}>
            <Button className="text-sm bg-green-500 text-white rounded-md px-2 py-1 mt-2 focus:outline-none">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
      <div className=''>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <span></span>
          <Modal.Title>{room.description}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='m-2 p-2'>
          {
            room.imageurls.map((image)=>(
              <img src={image} alt='unavailable'/>
            ))
          }
           {/* <img src={room.imageurls[0]} alt="image unavailable"/> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" className='bg-blue-700 text-white' onClick={handleClose}>
            Close
          </Button>
          <Link to="/askfromus">
          <Button variant="" className="bg-green-700 text-white" onClick={handleClose}>
            Ask from us
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
};

export default Rooms;