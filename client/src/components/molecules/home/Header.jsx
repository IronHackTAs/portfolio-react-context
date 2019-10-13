import React from 'react'

export default function Header() {
    return (
        <div className="home-header">
            <div id="home-header-sections">
                <section id="home-header-left">
                    <h1 className="capitalize">manuel<br />van <span>der</span> weyden</h1>
                    <h2 className="capitalize"><span>ux/ui</span> designer</h2>
                    <p>Nap all day cat dog hate mouse eat string barf pillow no baths hate everything but kitty poochy. Sleep on keyboard toy mouse squeak roll over. Mesmerizing birds. Poop on grasses licks paws destroy couch intently sniff hand. The dog smells bad gnaw the corn cob.</p>
                </section>
                <section id="home-header-right">
                    <img src="images/headerImg.svg" alt="example" />
                </section>
            </div>
        </div>
    )
}