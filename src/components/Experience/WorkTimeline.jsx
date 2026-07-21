import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import { Box, Typography } from "@mui/material";

const timelineData = [
  {
    year: "Aug 2023 - Present",
    title: "Arizona State University",
    subtitle: "B.S. Computer Science",
    description:
      "Senior Computer Science student focused on software engineering, web development, and full-stack applications.",
  },
  {
    year: "2024",
    title: "Software Engineering Intern",
    subtitle: "Company Name",
    description:
      "Developed responsive web applications using React, collaborated with engineers, and implemented new features.",
  },
  {
    year: "2023",
    title: "Portfolio Website",
    subtitle: "Personal Project",
    description:
      "Designed and developed a responsive portfolio using React, Vite, and modern UI principles.",
  },
  {
    year: "2023",
    title: "Hackathons & Projects",
    subtitle: "Various Teams",
    description:
      "Worked on team projects involving Java, Python, APIs, and user-centered application design.",
  },
];

export default function ResumeTimeline() {
  return (
    <Timeline
      position="right"
      sx={{
        mt: 4,

        "& .MuiTimelineItem-root:before": {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {timelineData.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{
              flex: 0.18,
              color: "#c3c3ff",
              fontWeight: 600,
              fontSize: "0.95rem",
              pr: 3,
              pt: 2,
            }}
          >
            {item.year}
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot
              sx={{
                bgcolor: "#c3c3ff",
                boxShadow: "0 0 12px rgba(195,195,255,.8)",
              }}
            />

            {index !== timelineData.length - 1 && (
              <TimelineConnector
                sx={{
                  bgcolor: "#c3c3ff",
                  width: "3px",
                }}
              />
            )}
          </TimelineSeparator>

          <TimelineContent sx={{ py: 2, pl: 3 }}>
            <Box
              sx={{
                backgroundColor: "#17171f",
                border: "1px solid rgba(195,195,255,.25)",
                borderRadius: "16px",
                padding: "1.4rem",
                transition: "0.3s",

                "&:hover": {
                  borderColor: "#c3c3ff",
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 25px rgba(195,195,255,.15)",
                },
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "#c3c3ff",
                  fontWeight: 600,
                  mt: 0.5,
                }}
              >
                {item.subtitle}
              </Typography>

              <Typography
                sx={{
                  color: "#bdbdbd",
                  mt: 1.5,
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}