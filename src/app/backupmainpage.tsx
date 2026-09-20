"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Download,
  Moon,
  Sun,
  Award,
  Terminal,
  Code,
  Briefcase,
} from "lucide-react";
import { resumeData } from "../data/resume";
import Image from "next/image";

import pic from "@/assets/pic.jpg";

const page = () => {
  return (
    <div className={`min-h-screen transition-all duration-500 `}>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left Column - Info */}
          <div className="space-y-16">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="border-l-4 border-red-500 pl-6">
                <h1 className="text-4xl lg:text-6xl font-bold mb-2 tracking-tight">
                  SAID ELHADI
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-mono">
                  Full-Stack Developer & AI Researcher
                </p>
              </div>

              <div className="space-y-4 max-w-md">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {resumeData.bio}
                </p>
                <div className="flex flex-col gap-2 text-sm font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-red-500 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{resumeData.personal.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-red-500 shrink-0" />
                    <a
                      href={`mailto:${resumeData.personal.email}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
                    >
                      {resumeData.personal.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-red-500 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{resumeData.personal.phone}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={`mailto:${resumeData.personal.email}`}
                  className="border border-black dark:border-white px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-sm font-mono"
                >
                  CONTACT
                </a>

                {/* <a
                                    href="/Said_Elhadi_Resume_CV.pdf"
                                    download="Said_Elhadi_Resume_CV.pdf"
                                    className="border border-gray-400 dark:border-gray-600 px-6 py-3 hover:border-black dark:hover:border-white transition-all duration-300 text-sm font-mono"
                                >
                                    RESUME
                                </a> */}
              </div>
            </motion.div>

            {/* Skills Detailed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-sm font-mono mb-6 text-red-500">
                TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
                {Object.entries(resumeData.skills).map(
                  ([category, skills], i) => (
                    <div key={category} className="flex items-start gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        <h3 className="text-base font-mono font-bold text-black dark:text-white uppercase tracking-wide w-full">
                          {category}
                        </h3>
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-xs font-mono border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:border-red-500 hover:text-red-500 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <h2 className="text-sm font-mono mb-6 text-red-500">LANGUAGES</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {resumeData.languages.map((language, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xs font-mono font-bold text-black dark:text-white mb-1">
                      {language.name}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {language.level}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <h2 className="text-sm font-mono mb-6 text-red-500">
                EXPERIENCE
              </h2>
              <div className="space-y-3">
                {resumeData.experience.slice(0, 3).map((item, i) => (
                  <div
                    key={i}
                    className="border-b border-gray-200 dark:border-gray-800 pb-3"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <Briefcase size={12} className="text-red-500" />
                        <span className="font-bold text-sm">
                          {item.position}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-xs text-gray-800 dark:text-gray-300 mb-1">
                      {item.company}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <h2 className="text-sm font-mono mb-6 text-red-500">EDUCATION</h2>
              <div className="space-y-3">
                {resumeData.education.map((item, i) => (
                  <div
                    key={i}
                    className="border-b border-gray-200 dark:border-gray-800 pb-3"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <Terminal size={12} className="text-red-500" />
                        <span className="font-bold text-sm">{item.degree}</span>
                      </div>
                      <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-xs text-gray-800 dark:text-gray-300 mb-1">
                      {item.school}
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs px-2 py-1 border rounded ${item.status === "In Progress" ? "border-red-500 text-red-500" : "border-green-500 text-green-600 dark:text-green-400"}`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-sm font-mono mb-6 text-red-500">AWARDS</h2>
              <div className="space-y-2">
                {resumeData.awards.map((award, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Award size={12} className="text-red-500" />
                      <span className="font-medium">{award.title}</span>
                    </div>
                    <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                      {award.period}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="border-2 border-red-500 p-6 mt-12"
            >
              <h3 className="font-bold text-lg mb-4">GET IN TOUCH</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Open to new opportunities, research collaborations, and
                interesting projects.
              </p>
              <div className="space-y-2 text-sm font-mono">
                <div>{resumeData.personal.email}</div>
                <div className="text-gray-600 dark:text-gray-400">
                  {resumeData.personal.phone}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {resumeData.personal.location}
                </div>
              </div>
            </motion.div>
            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-6"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={resumeData.personal.github}
                className="text-black dark:text-white hover:text-red-500 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={resumeData.personal.linkedin}
                className="text-black dark:text-white hover:text-red-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${resumeData.personal.email}`}
                className="text-black dark:text-white hover:text-red-500 transition-colors"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Projects & Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="space-y-8"
          >
            <div className="aspect-square mx-auto h-fit border-2  relative">
              <Image src={pic} fill alt="Said Elhadi, Elhadi Said" />
            </div>
            {/* Publications */}
            <div>
              <div className="border-l-4 border-red-500 pl-6 mb-8">
                <h2 className="text-2xl font-bold mb-2">PUBLICATIONS</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
                  Published research papers
                </p>
              </div>

              <div className="space-y-6">
                {resumeData.publications.map((pub, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                    className="border border-gray-200 dark:border-gray-800 p-6 hover:border-black dark:hover:border-white transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-base group-hover:text-red-500 transition-colors leading-tight">
                        {pub.title}
                      </h3>
                      {pub.doi && (
                        <a
                          href={pub.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-red-500 transition-colors ml-4 flex-shrink-0"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>

                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-sm font-mono text-red-500">
                      {pub.conference} • {pub.year}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <div className="border-l-4 border-red-500 pl-6 mb-8">
                <h2 className="text-2xl font-bold mb-2">KEY PROJECTS</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
                  Technical achievements and implementations
                </p>
              </div>

              <div className="space-y-6">
                {resumeData.projects.slice(0, 6).map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + i * 0.1 }}
                    className="border border-gray-200 dark:border-gray-800 p-6 hover:border-black dark:hover:border-white transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-lg group-hover:text-red-500 transition-colors">
                        {project.title}
                      </h3>
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>

                    <p className="text-sm font-mono text-red-500 mb-4">
                      {project.status}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-1 border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-mono text-gray-500 text-center">
            © 2025 SAID ELHADI
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
