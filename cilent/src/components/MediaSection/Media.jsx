import './Media.css'

function Media() {
    return (
        <div className='section-media' >
            <div className='media-container row '>
                <iframe className='col-5'  width="560" height="315" src="https://www.youtube.com/embed/a_WfraAC868?si=JE-m9gQxnWw_5jqk" title="YouTube video player" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                <div className='media-content col-6'>
                    <div className='media-content-text'>
                        <h4>
                          <span>Challenge the status quo and redefine what’s possible.</span> With a meticulously crafted strategy and a brand identity designed to resonate authentically with your community, we empower your business to transcend boundaries, foster meaningful connections, and leave an indelible mark in the hearts and minds of your audience. Together, we’ll build a legacy that not only stands out but endures.
                        </h4>
                    </div>
                    <button>Know more</button>


                </div>
            </div>

        </div>
    )
}

export default Media