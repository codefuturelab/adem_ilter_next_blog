

export default function SubscribeButton() {
    return (
        <div className="pt-8 site-text-main dark:bg-gray-800 ">
            <form className="flex-nowrap ">
                <input
                    className="w-1/2 rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                    placeholder="your@mail.com"/>
                <button
                    className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe
                </button>
            </form>
        </div>
    )
}