import { Footer } from '@layout/Footer';
import { Navbar } from '@layout/Navbar';
import { Carousel } from '@layout/carousel'

export function Homepage() {

        return (
            <>
                <Navbar />
                <Carousel />
                <Carousel />
                <Carousel />
                <Footer />
            </>
        )
}
