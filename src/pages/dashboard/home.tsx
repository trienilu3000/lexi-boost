import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative p-6 flex flex-col items-center bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-full max-w-3xl">
        <h2 className="text-xl font-semibold text-gray-700">
          Today's Progress
        </h2>
        <div className="w-full h-2 bg-gray-200 rounded-md mt-3 relative">
          <div className="w-[60%] h-full bg-blue-500 rounded-md"></div>
        </div>
        <p className="text-sm text-gray-500 mt-2 min-h-[20px]">
          6/10 words learned
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-6 w-full max-w-6xl">
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition flex-1 min-w-[250px] max-w-sm">
          <h3 className="text-lg font-semibold text-gray-700">
            Learn Vocabulary
          </h3>
          <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
            Memorize new words with flashcards and quizzes.
          </p>
          <Link to="/vocabulary">
            <button className="mt-4 w-full py-2 rounded-lg text-white font-medium bg-blue-500 hover:bg-blue-600 transition">
              Start Now
            </button>
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition flex-1 min-w-[250px] max-w-sm">
          <h3 className="text-lg font-semibold text-gray-700">
            Practice Listening
          </h3>
          <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
            Listen to conversations and fill in missing words.
          </p>
          <Link to="/listening">
            <button className="mt-4 w-full py-2 rounded-lg text-white font-medium bg-green-500 hover:bg-green-600 transition">
              Start Now
            </button>
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition flex-1 min-w-[250px] max-w-sm">
          <h3 className="text-lg font-semibold text-gray-700">
            Improve Reading
          </h3>
          <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
            Read articles and short stories to build comprehension.
          </p>
          <Link to="/reading">
            <button className="mt-4 w-full py-2 rounded-lg text-white font-medium bg-purple-500 hover:bg-purple-600 transition">
              Start Now
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition flex-1 min-w-[250px] max-w-sm">
          <h3 className="text-lg font-semibold text-gray-700">Grammar</h3>
          <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
            Keep your learning streak alive!
          </p>
          <Link to="/grammar">
            <button className="mt-4 w-full py-2 rounded-lg text-white font-medium bg-orange-500 hover:bg-orange-600 transition">
              Start Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
