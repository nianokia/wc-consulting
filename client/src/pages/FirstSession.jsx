import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// PURPOSE - Details what a client can expect at their first session.

const FirstSession = () => {
  return (
    <>
      <Header />
      <Hero title="First Session" image='/src/images/walkbridge.png' />
      <h1>First Session</h1>

      <div className="first-session-details">
        Elementum aliquam vel pretium pretium sollicitudin nullam adipiscing sed egestas? Primis fermentum rutrum arcu porttitor torquent dis. Turpis molestie morbi amet metus vivamus eget luctus senectus. Netus vehicula habitant ante amet dui at felis rhoncus porttitor! Morbi nam laoreet; quis ridiculus duis lorem lacus. Orci risus justo leo dignissim ridiculus erat. Hendrerit porttitor massa a neque quam phasellus. Platea gravida senectus fusce pellentesque, ornare curae libero porttitor. Leo euismod maecenas est blandit ornare tristique etiam.

        Potenti scelerisque sed scelerisque curae vel. Per turpis pharetra elit torquent potenti nisl mollis ligula. Non augue nisi orci himenaeos lectus interdum fringilla. Commodo torquent suspendisse proin platea justo erat convallis fames. Eros gravida id dignissim rutrum; volutpat curae. Quisque euismod iaculis curae amet at dictum. Praesent laoreet faucibus sed proin phasellus mi class turpis efficitur. Ligula porttitor tempor vel massa turpis ultricies et. Vitae mus quisque consectetur commodo ligula montes sagittis viverra.

        Ac a pharetra; eu blandit eu condimentum. Tellus nisl pretium magnis vestibulum eleifend non. Consectetur natoque velit ultrices dapibus platea rhoncus mi? Commodo luctus semper at integer est praesent. Et duis pellentesque laoreet primis adipiscing; erat urna himenaeos. Nunc commodo quis taciti; lacus viverra id donec. Habitasse fermentum interdum per convallis congue fringilla nibh. Iaculis consectetur nulla aenean eleifend potenti praesent.

        Eget lacinia libero ultricies netus cubilia iaculis. Nostra augue placerat vel phasellus, nullam rutrum. Pretium sodales proin sit volutpat urna mus dis lobortis. Vel quam platea mus massa vestibulum bibendum ante dictum. Sed fusce etiam odio lorem dignissim rutrum magna. Mi vestibulum mattis praesent pulvinar scelerisque hendrerit sagittis commodo! Facilisis semper metus parturient libero per hendrerit habitant aliquam. Vel penatibus ad vel curabitur turpis. Potenti lacus dignissim ligula, nisl donec integer nisl.
      </div>

      <br />

      <button>
        <Link to='/faqs'>FAQs</Link>
      </button>
      <br /><br />

      <hr />
      <Footer />
    </>
  )
}

export default FirstSession