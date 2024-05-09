"use client"

function PagesLayout({ children }) {

    return (
        <section>
            <div className="max-w-[768px] px-5 py-5 justify-center mx-auto">
                {children}
            </div>
        </section>
    )
}

export default PagesLayout