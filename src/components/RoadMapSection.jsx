import MileStone from "./MileStone";

const roadmap = [
    {
        id: 1,
        name: 'Project Kickoff',
        description: "Kick-off meeting and requirement gathering",
    },{
        id: 2,
        name: 'Design',
        description: "Design and prototyping",
    },{
        id: 3,
        name: 'Development',
        description: "Development and testing",
    },{
        id: 4,
        name: 'Development',
        description: "Development and final testing",
    },{
        id: 5,
        name: 'Maintenance',
        description: "Maintenance and support",
    },
]


function RoadMapSection() {
  return (
    <section className="max-w-80 mx-auto">
        <h1 className="font-semibold text-3xl text-center mb-16">Roadmap</h1>
        {
            roadmap.map((RoadMapItem, index) => (
                <MileStone 
                    key={index}
                    title={RoadMapItem.name}
                    description={RoadMapItem.description}
                    lastItem={index === roadmap.length - 1}
                />
            ))
        }
    </section>
  )
}

export default RoadMapSection