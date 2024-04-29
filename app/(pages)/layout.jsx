import Header from "@/components/header"

function PagesLayout({ children }) {
    return (
        <section>
            <div className="max-w-[768px] px-5 py-5 justify-center mx-auto">
                <Header />
                {children}
            </div>
        </section>
    )
}

export default PagesLayout