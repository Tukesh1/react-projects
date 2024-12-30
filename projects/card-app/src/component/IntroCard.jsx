
function IntroCard() {
    // const userInfo ={
    //     name:"Jon",

    // }
    return (
        <div class=" container max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src="https://th.bing.com/th/id/OIP.gsm2VfnK-O95DpauwkzgsgHaI9?rs=1&pid=ImgDetMain" alt="Card Image" class="w-full h-48 object-cover"></img>
                <div class="p-6">
                    <h2 class="text-xl font-bold text-gray-800 mb-2">Card Title</h2>
                    <p class="text-gray-600 text-sm mb-4">
                        This is a beautifully designed card with an image, title, description, and a button. It's perfect for showcasing content.
                    </p>
                    <button class="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        Learn More
                    </button>
                </div>
        </div>

    )
}
export default IntroCard;