var config = {
    style: 'mapbox://styles/jessicasinger/clox6di0700pk01qsho0w6c31', //TomahHighlands_Storytelling
    accessToken: 'pk.eyJ1IjoiamVzc2ljYXNpbmdlciIsImEiOiJjbGlqNDBzanAwNDBoM2NwZTYwdHBvY3A3In0.K5tOO7mq2uXeRrccjnBveg',
    showMarkers: false,
    markerColor: '#B5DBD2',
    showPopup: true,
    popupColor: '#B5DBD2',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    // title: 'Tomah Highlands',
    //  subtitle: 'Carbon Project',
    //byline: 'By a Digital Storyteller',
    //footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            //   title: 'Tomah Highlands',
            image: 'screenshot.jpg',
            //  description: 'The Tomah Highlands project is located in an area of Maine that provides ideal bald eagle habitat and is rich with bald eagle nesting sites. With its large amount of shoreline, preservation of Tomah Highlands’ forest resources are important for the continued conservation efforts of this iconic national bird. A reduced amount of timber harvesting not only limits potential impacts to existing nests, but maintains and improves potential nesting sites for bald eagles in the future.',
            location: {
                center: [-67.95991, 45.61856],
                zoom: 10,
                pitch: 50,
                bearing: 8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                      ],
            onChapterExit: [
            ]
        },

        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Ecological Feature: Bald Eagle Nests',
            image: 'bald-eagle.webp',
            description: 'The Tomah Highlands project is located in an area of Maine that provides ideal bald eagle habitat and is rich with bald eagle nesting sites. With its large amount of shoreline, preservation of Tomah Highlands’s forest resources is important for the continued conservation efforts of this iconic national bird. A reduced amount of timber harvesting not only limits potential impacts to existing nests but maintains and improves potential nesting sites for bald eagles in the future.',
            secondimage: 'legend1.png',
            location: {
                center: [-67.65386, 45.67947],
                zoom: 8.3,
                pitch: 5,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'baldeaglenests',
                    opacity: 1,
                    //   duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'baldeaglenests',
                    opacity: 0,
                    duration: 1000
                }

            ],
            // // Add a second text box
            // secondTextBox: {
            //     title: 'Additional Information',
            //     image: 'Baldeagle',
            //     content: 'This is the second text box. You can add more details or information here.'
            // }
        },


        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Critical Habitat for Threatened and Endangered Species',
            image: 'lynxsalmon.jpg',
            secondimage: 'legend2.png',
            description: 'Proposed and designated critical habitat under the U.S. Endangered Species Act According to the U.S. Fish and Wildlife Service. Critical habitat may include an area that is not currently occupied by the species but that will be needed for its recovery. An area is designated as “critical habitat” after the FWS publishes a proposed Federal regulation in the Federal Register and receives and considers public comments on the proposal. ',
            location: {
                center: [-69.14229, 45.53149],
                zoom: 8.1,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'criticalhabitat',
                    opacity: 0.75,
                    duration: 1000,
                    //  action: 'popup'
                    // Use popup directly within onChapterEnter
                    // popup: {
                    //     content: '<h3>Critical Habitat Popup</h3><p>This is additional information about the critical habitat.</p>'
                }

                // },
                // {
                //     action: 'popup'
                // }
            ],

            onChapterExit: [
                {
                    layer: 'criticalhabitat',
                    opacity: 0,
                    duration: 1000,
                }
            ],
            popup: {
                content: 'hey'
            }
        },

        // {
        //     id: 'fourth-chapter',
        //     alignment: 'fully',
        //     hidden: false,
        //     title: 'Third Title',
        //     image: '',
        //     description: '',
        //     location: {
        //         center: [-58.54195, -34.71600],
        //         zoom: 4,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // }
    ]
};
