import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Box, Typography } from "@mui/material";

import asuLogo from "../../assets/icons/asu.png"; // change path/name to your actual file

const education = [
  {
    year: "Aug 2023 - Present",
    school: "Arizona State University",
    degree: "B.S. in Computer Science, Minor in Data Science",
    location: "Tempe, AZ",
    description: "Expected graduation: May 2026",
    logo: asuLogo,
  },
];

export default function EducationTimeline() {
  return (
    <Timeline
      position="right"
      sx={{
        "& .MuiTimelineItem-root:before": {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {education.map((item, index) => (
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
            {index !== education.length - 1 && (
              <TimelineConnector sx={{ bgcolor: "#c3c3ff" }} />
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
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  component="img"
                  src={item.logo}
                  alt={`${item.school} logo`}
                  sx={{
                    width: 50,
                    height: 40,
                    objectFit: "contain",
                    borderRadius: "20px",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.school}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#c3c3ff",
                      fontWeight: 600,
                      mt: 0.5,
                    }}
                  >
                    {item.degree}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "inline-block",
                  mt: 1.5,
                  px: 1.2,
                  py: 0.5,
                  borderRadius: "999px",
                  border: "1px solid rgba(195,195,255,.35)",
                  color: "#c3c3ff",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  backgroundColor: "rgba(195,195,255,.08)",
                }}
              >
                {item.location}
              </Box>

              <Typography sx={{ color: "#bdbdbd", mt: 1.5, lineHeight: 1.7 }}>
                {item.description}
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}