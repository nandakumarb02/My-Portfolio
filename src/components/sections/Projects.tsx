import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import letsDriveImage from "@/assets/project-letsdrive.jpg";
import tripoidImage from "@/assets/project-tripoid.jpg";
import revibeImage from "@/assets/project-revibe.jpg";

const Projects = () => {
  const projects = [
    {
      title: "LET'S DRIVE",
      description: "A mobile app improving the bike rental experience for short to medium-distance travel. Designed for urban users seeking convenience and eco-friendly transport.",
      image: letsDriveImage,
      tools: ["Figma", "FigJam", "Adobe Illustrator"],
      category: "Mobile App Design",
      status: "Completed"
    },
    {
      title: "Tripoid",
      description: "An AI-powered travel planner that simplifies trip planning and budgeting with personalized recommendations.",
      image: tripoidImage,
      tools: ["Figma", "Illustrator", "Photoshop"],
      category: "Web App Design",
      status: "Completed"
    },
    {
      title: "Revibe.codes",
      description: "A code walkthrough platform that helps beginners learn from real-world projects through visual code structures and guided explanations.",
      image: revibeImage,
      tools: ["Figma"],
      category: "Educational Platform",
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work in UI/UX design and digital experiences
          </p>
        </div>

        {/* Netflix-style Title */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gradient mb-2">
            Today's Top Picks for Designer
          </h3>
          <div className="w-16 h-0.5 bg-accent"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card overflow-hidden hover-lift group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "bg-accent text-accent-foreground" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="space-y-3">
                    <Button size="sm" variant="glass">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <Badge variant="outline" className="text-xs border-accent/30 text-accent mb-3">
                    {project.category}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools Used */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Continue Watching Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gradient mb-2">
            Continue Exploring
          </h3>
          <div className="w-16 h-0.5 bg-accent"></div>
        </div>

        {/* Additional Project Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Case Studies", desc: "Detailed project breakdowns", color: "from-blue-500/20 to-purple-500/20" },
            { title: "Design Process", desc: "Behind the scenes", color: "from-green-500/20 to-blue-500/20" },
            { title: "Client Work", desc: "Professional projects", color: "from-purple-500/20 to-pink-500/20" },
            { title: "Experiments", desc: "Creative explorations", color: "from-yellow-500/20 to-red-500/20" }
          ].map((item, index) => (
            <Card key={index} className="glass-card p-6 hover-lift cursor-pointer group">
              <div className={`w-full h-32 rounded-lg bg-gradient-to-br ${item.color} mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                <span className="text-2xl font-bold opacity-60">{item.title}</span>
              </div>
              <h4 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;