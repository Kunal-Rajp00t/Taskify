import React,{ useEffect,useState } from 'react';
// import './About600.js'
export default function AboutComp() {
    // let isMobile=window.innerWidth<=600?true:false; it will owrk only when we will reload 
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        // Function to handle window resize event
        function handleResize() {
            setIsMobile(window.innerWidth <= 600);
        }

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial call to handleResize to set initial state
        handleResize();

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
   let mystyle={
    color:"darkgrey",textShadow: "4px 4px 4px rgba(0, 0, 0, 0.3)" // Text shadow
   }
   let heading={
    color:"rgb(54 54 54)",
   }
    return (
        <div className='container '>
            <h1 style={mystyle}>Getting Started !!</h1>
            <div className="container text-start my-3 mt-3 ">
                <div className={`${isMobile?'row-cols-1':'row-cols-2'} row  gy-5 gx-5 my-2 about-sec`}>
                    <div className="col" ><h4 style={heading}>Our App</h4>
                        Introducing our todo list web app—your ultimate task management solution. Designed for simplicity and productivity, it's your go-to tool for organizing work, school, or personal tasks. With an intuitive interface and essential features, we're here to streamline your to-do list and boost your productivity.</div>
                    <div className="col"><h4 style={heading}>Difficulty adding new Tasks ?</h4>
                        Adding tasks to your todo list is quick and simple with our app. Follow these steps to seamlessly add a new task: Go to <i>'Add Task'</i> in the navigation bar, enter Task details (e.g. Title, Description etc.), then click on the <i>'Add Now'</i> button and it's done !</div>
                </div>
                <div className="row row-cols-1 gy-5 gx-5 my-2">
                    <div className="col"><h4 style={heading}>Key Feautes</h4>
                        <i>Automatic Data Storage </i> Your tasks are automatically saved locally, ensuring that your progress is preserved even if you close the app or switch devices.
                        <i>Dynamic Task Addition</i> Add tasks on-the-go with ease. Our app allows you to input task details swiftly, ensuring a smooth user experience.
                        <i>Flexible Task Deletion</i> Remove completed or unnecessary tasks effortlessly. Simply select the task you want to delete, and with a click, they're gone, decluttering your list instantly.
                        <i>Responsive Design</i> Whether you're accessing our app on your computer, tablet, or smartphone, our responsive design ensures optimal viewing and interaction experience across all screen sizes.</div>
                </div>
                
            </div>
        </div>
    )
}
