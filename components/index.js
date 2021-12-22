import React, { useState } from "react"
import Loadable from "@loadable/component"

import Header from "./Header"
import MainSection from "./MainSection"
import FeaturesSection from "./FeaturesSection"
import InteractiveSamples from "./InteractiveSamples"
import ContactSalesModal from "./ContactSales"
import CommunitySection from "./CommunitySection"
import TeamSection from "./TeamSection"
import Footer from "./Footer"

import useContent from "./useContent"
import { GlobalStyles } from "src/developers/uikit/Layout"
import ApiKeyForm from "./ApiKeyForm"

const SamplesSection = Loadable(() => import("./SamplesSection"))

const DeveloperPage = ({ theme, changeTheme }) => {
  const content = useContent()
  const [isContactSalesModalOpen, setIsContactSalesModalOpen] = useState(false)
  const handleModalClose = () => setIsContactSalesModalOpen(false)
  const handleModalOpen = () => setIsContactSalesModalOpen(true)

  return (
    <>
      <GlobalStyles />
      <Header
        theme={theme}
        content={content}
        openModal={handleModalOpen}
        changeTheme={changeTheme}
      />
      <MainSection content={content.main} />
      <FeaturesSection content={content.features} />
      <InteractiveSamples content={content.interactiveSamples} />
      <SamplesSection content={content.samples} />
      <CommunitySection content={content.community} />
      <TeamSection content={content.team} />
      <ApiKeyForm content={content.contact} openModal={handleModalOpen} />
      <Footer content={content.footer} />
      <ContactSalesModal
        content={content.salesModal}
        isOpen={isContactSalesModalOpen}
        onClose={handleModalClose}
      />
    </>
  )
}

export default DeveloperPage
