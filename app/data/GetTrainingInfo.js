import { getTranslations } from "next-intl/server";
class TrainingInfoData {
  constructor(
    id,
    linkid,
    name,
    shortname,
    category,
    shortdescr,
    descr,
    briefdescr,
    duration,
    features,
    objectives,
    audience,
    modes,
    assessment,
    available,
    languages,
    plan,
    ytvideo,
    thumb,
    gallery,
    video,
    pdf,
    cardimg,
    cardalt,
    videoalt,
    keywords,
    ref
  ) {
    this.id = id;
    this.linkid = linkid;
    this.name = name;
    this.shortname = shortname;
    this.category = category;
    this.shortdescr = shortdescr;
    this.descr = descr;
    this.briefdescr = briefdescr;
    this.duration = duration;
    this.features = features;
    this.objectives = objectives;
    this.audience = audience;
    this.modes = modes;
    this.assessment = assessment;
    this.available = available;
    this.languages = languages;
    this.plan = plan;
    this.ytvideo = ytvideo;
    this.thumb = thumb;
    this.gallery = gallery;
    this.video = video;
    this.pdf = pdf;
    this.cardimg = cardimg;
    this.cardalt = cardalt;
    this.videoalt = videoalt;
    this.keywords = keywords;
    this.ref = ref;
  }
}

export async function getLocalizedTrainingInfo() {
  const t = await getTranslations("TrainingInfoData");

  const DATA = [
    new TrainingInfoData(
      1001,
      t(`1001.linkid`),
      t(`1001.name`),
      t(`1001.shortname`),
      t(`1001.category`),
      t(`1001.shortdescr`),
      t(`1001.descr`),
      t(`1001.briefdescr`),
      t(`1001.duration`),
      [t(`1001.features_0`), t(`1001.features_1`), t(`1001.features_2`)],
      t(`1001.objectives`),
      t(`1001.audience`),
      t(`1001.modes`),
      t(`1001.assessment`),
      t(`1001.available`),
      t(`1001.languages`),
      t(`1001.plan`),
      "https://www.youtube.com/embed/91xoQ5SN1LE?autoplay=1&amp",
      "https://img.youtube.com/vi/91xoQ5SN1LE/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/hves/HVES_PreviewImage01_Web_v01.jpg",
            "Photo of a High Voltage Electrical Substation Transformer used in training.Virtual Reality (VR) training for substation maintenance, featuring XR programs. Enhance skills in high-voltage transformer operations and safety protocols. Learn efficient techniques for transformer maintenance and operation in a simulated environment.",
          ],
          [
            "/assets/gallery/hves/HVES_PreviewImage03_Web_v01.jpg",
            "Image of High Voltage Electrical Substation Training: High-voltage coils and control boxes. Virtual Reality (VR) training for substation maintenance, featuring XR programs. Gain expertise in managing high-voltage coils and control boxes for transformer operations. Learn effective techniques in a simulated environment to ensure efficient substation performance and safety.",
          ],
          [
            "/assets/gallery/hves/HVES_PreviewImage04_Web_v01.jpg",
            "Overview photo of the entire yard of the Electrical Substation. Gain a comprehensive view of the substation environment used in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs for substation maintenance and operations. Understand the layout and components of the substation yard in a simulated environment.",
          ],
          [
            "/assets/gallery/hves/HVES_PreviewImage05_Web_v01.jpg",
            "Close-up photo of high-voltage coils with a demonstration of the assistant guide in VR training. Explore the intricate details of coils in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs showcasing assistant guide functionalities. Learn the specifics of coil operations and interact with the virtual guide for a comprehensive training experience.",
          ],
          [
            "/assets/gallery/hves/HVES_PreviewImage06_Web_v01.jpg",
            "Preview photo of voltage information display.	Learn about proper voltage levels in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs featuring informative displays on correct voltage levels. Gain insights into voltage safety protocols in a simulated environment.",
          ],
          [
            "/assets/gallery/hves/HVES_PreviewImage07_Web_v01.jpg",
            "Preview photo of tool selection in VR training interaction. Explore interactive tool choices in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs offering a glimpse into the selection of tools for simulated tasks. Experience hands-on learning by choosing the right tools in the virtual environment.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/hves/mob/HVES_PreviewImage01_Web_v01.jpg",
            "Photo of a High Voltage Electrical Substation Transformer used in training.Virtual Reality (VR) training for substation maintenance, featuring XR programs. Enhance skills in high-voltage transformer operations and safety protocols. Learn efficient techniques for transformer maintenance and operation in a simulated environment.",
          ],
          [
            "/assets/gallery/hves/mob/HVES_PreviewImage03_Web_v01.jpg",
            "Image of High Voltage Electrical Substation Training: High-voltage coils and control boxes. Virtual Reality (VR) training for substation maintenance, featuring XR programs. Gain expertise in managing high-voltage coils and control boxes for transformer operations. Learn effective techniques in a simulated environment to ensure efficient substation performance and safety.",
          ],
          [
            "/assets/gallery/hves/mob/HVES_PreviewImage04_Web_v01.jpg",
            "Overview photo of the entire yard of the Electrical Substation. Gain a comprehensive view of the substation environment used in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs for substation maintenance and operations. Understand the layout and components of the substation yard in a simulated environment.",
          ],
          [
            "/assets/gallery/hves/mob/HVES_PreviewImage05_Web_v01.jpg",
            "Close-up photo of high-voltage coils with a demonstration of the assistant guide in VR training. Explore the intricate details of coils in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs showcasing assistant guide functionalities. Learn the specifics of coil operations and interact with the virtual guide for a comprehensive training experience.",
          ],
          [
            "/assets/gallery/hves/mob/HVES_PreviewImage06_Web_v01.jpg",
            "Preview photo of voltage information display.	Learn about proper voltage levels in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs featuring informative displays on correct voltage levels. Gain insights into voltage safety protocols in a simulated environment.",
          ],
          [
            "/assets/gallery/hves/mob/HVES_PreviewImage07_Web_v01.jpg",
            "Preview photo of tool selection in VR training interaction. Explore interactive tool choices in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs offering a glimpse into the selection of tools for simulated tasks. Experience hands-on learning by choosing the right tools in the virtual environment.",
          ],
        ],
      },
      {
        pc: "/assets/slider/video/HVES.mp4",
        mob: null,
        pcThumb: "/assets/gallery/hves/HVES_PreviewImage01_Web_v01.jpg",
        mobThumb:
          "/assets/gallery/hves/mob/Landing-mobile-banner-592x1280-still-HVES.jpg",
      },
      "https://metaenga.com/download/pdf/HV-Electrical-Substation-VR-Training-Outline.pdf",
      "/assets/gallery/hves/card/card.webp",
      t(`1001.cardalt`),
      t(`1001.videoalt`),
      t(`1001.keywords`),
      "hv"
    ),
    new TrainingInfoData(
      1002,
      t(`1002.linkid`),
      [t("1002.name_0"), t("1002.name_1")],
      t(`1002.shortname`),
      t(`1002.category`),
      t(`1002.shortdescr`),
      t(`1002.descr`),
      t(`1002.briefdescr`),
      t(`1002.duration`),
      [t(`1002.features_0`), t(`1002.features_1`), t(`1002.features_2`)],
      t(`1002.objectives`),
      t(`1002.audience`),
      t(`1002.modes`),
      t(`1002.assessment`),
      t(`1002.available`),
      t(`1002.languages`),
      t(`1002.plan`),
      "https://www.youtube.com/embed/D4LarinRBFA?autoplay=1&amp",
      "https://img.youtube.com/vi/D4LarinRBFA/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/osha/OSHA-01.jpg",
            "Image featuring introductory information about Occupational Safety and Health Training.Set against the backdrop of the training facility, get an overview of the training environment. Virtual Reality (VR) training with XR programs designed for immersive safety education and workplace health protocols.",
          ],
          [
            "/assets/gallery/osha/OSHA-02.jpg",
            "Photo showcasing the recommended equipment for tasks in Occupational Safety and Health Training. Explore the provided gear and tools essential for training activities. Virtual Reality (VR) training with XR programs ensuring a realistic and prepared learning experience with the right equipment.",
          ],
          [
            "/assets/gallery/osha/OSHA-03.jpg",
            "Photo of the Virtual Reality (VR) training room for Occupational Safety and Health Training. Immerse yourself in a simulated environment designed for realistic and effective safety education. Explore the virtual training space with XR programs for an engaging and interactive learning experience.",
          ],
          [
            "/assets/gallery/osha/OSHA-04.jpg",
            "Photo of large-scale electrical equipment used in training scenarios. Explore the intricacies of handling oversized electrical components in specialized training sessions. Virtual Reality (VR) training with XR programs providing a close look at the operation and maintenance of large electrical equipment.",
          ],
          [
            "/assets/gallery/osha/OSHA-05.jpg",
            "Photo of an electrical panel with a user measuring voltage using a multimeter. Gain practical skills in voltage measurement within a simulated environment. Virtual Reality (VR) training with XR programs providing interactive scenarios for hands-on learning.",
          ],
          [
            "/assets/gallery/osha/OSHA-06.jpg",
            "Photo of an authorization magnetic key against the backdrop of electrical devices. Explore the integration of magnetic key access in secure electrical environments. Virtual Reality (VR) training with XR programs showcasing advanced security features in electrical systems.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/osha/mob/OSHA-01.jpg",
            "Image featuring introductory information about Occupational Safety and Health Training.Set against the backdrop of the training facility, get an overview of the training environment. Virtual Reality (VR) training with XR programs designed for immersive safety education and workplace health protocols.",
          ],
          [
            "/assets/gallery/osha/mob/OSHA-02.jpg",
            "Photo showcasing the recommended equipment for tasks in Occupational Safety and Health Training. Explore the provided gear and tools essential for training activities. Virtual Reality (VR) training with XR programs ensuring a realistic and prepared learning experience with the right equipment.",
          ],
          [
            "/assets/gallery/osha/mob/OSHA-03.jpg",
            "Photo of the Virtual Reality (VR) training room for Occupational Safety and Health Training. Immerse yourself in a simulated environment designed for realistic and effective safety education. Explore the virtual training space with XR programs for an engaging and interactive learning experience.",
          ],
          [
            "/assets/gallery/osha/mob/OSHA-04.jpg",
            "Photo of large-scale electrical equipment used in training scenarios. Explore the intricacies of handling oversized electrical components in specialized training sessions. Virtual Reality (VR) training with XR programs providing a close look at the operation and maintenance of large electrical equipment.",
          ],
          [
            "/assets/gallery/osha/mob/OSHA-05.jpg",
            "Photo of an electrical panel with a user measuring voltage using a multimeter. Gain practical skills in voltage measurement within a simulated environment. Virtual Reality (VR) training with XR programs providing interactive scenarios for hands-on learning.",
          ],
          [
            "/assets/gallery/osha/mob/OSHA-06.jpg",
            "Photo of an authorization magnetic key against the backdrop of electrical devices. Explore the integration of magnetic key access in secure electrical environments. Virtual Reality (VR) training with XR programs showcasing advanced security features in electrical systems.",
          ],
        ],
      },
      {
        pc: "/assets/slider/video/OSHA.mp4",
        mob: null,
        pcThumb: "/assets/gallery/osha/OSHA-01.jpg",
        mobThumb:
          "/assets/gallery/osha/mob/Landing-mobile-banner-592x1280-still-OSHA.jpg",
      },
      "https://metaenga.com/download/pdf/Occupational-Safety-And-Health-VR-Training-Outline.pdf",
      "/assets/gallery/osha/card/card.webp",
      t(`1002.cardalt`),
      t(`1002.videoalt`),
      t(`1002.keywords`),
      "osha"
    ),
    new TrainingInfoData(
      1003,
      t(`1003.linkid`),
      t(`1003.name`),
      t(`1003.shortname`),
      t(`1003.category`),
      t(`1003.shortdescr`),
      t(`1003.descr`),
      t(`1003.briefdescr`),
      t(`1003.duration`),
      [t(`1003.features_0`), t(`1003.features_1`), t(`1003.features_2`)],
      t(`1003.objectives`),
      t(`1003.audience`),
      t(`1003.modes`),
      t(`1003.assessment`),
      t(`1003.available`),
      t(`1003.languages`),
      t(`1003.plan`),
      "https://www.youtube.com/embed/zj4PurgE7Bs?autoplay=1&amp",
      "https://img.youtube.com/vi/zj4PurgE7Bs/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/oil/TOS-01.jpg",
            "Overview photo of the substation used in Transformer Oil Sampling Training. Gain a comprehensive view of the training environment for oil sampling procedures. Virtual Reality (VR) training with XR programs for effective and safe transformer oil sampling. Understand the layout and components of the substation in a simulated environment.",
          ],
          [
            "/assets/gallery/oil/TOS-02.jpg",
            "Photo featuring checkboxes for mandatory equipment verification. Highlighting equipment check procedures in Transformer Oil Sampling Training. Virtual Reality (VR) training with XR programs emphasizing the importance of verifying essential equipment. Experience the interactive process of checking off mandatory equipment in a simulated environment.",
          ],
          [
            "/assets/gallery/oil/TOS-03.jpg",
            "Photo capturing the moment of successfully completing Transformer Oil Sampling Training. Experience the satisfaction of mastering transformer oil sampling techniques in a simulated environment during Virtual Reality (VR) training with XR programs.",
          ],
          [
            "/assets/gallery/oil/TOS-04.jpg",
            "Photo capturing the process of oil sampling from the substation. Gain insight into the practical steps of oil sampling procedures during Transformer Oil Sampling Training. Virtual Reality (VR) training with XR programs providing a detailed and immersive look into the oil sampling process.",
          ],
          [
            "/assets/gallery/oil/TOS-05.jpg",
            "Photo depicting a safety induction session during Transformer Oil Sampling Training. Emphasize the importance of safety protocols through detailed safety briefings. 	Virtual Reality (VR) training with XR programs providing immersive safety training experiences.",
          ],
          [
            "/assets/gallery/oil/TOS-06.jpg",
            "Photo illustrating the familiarization process with the oil sampling valve device. Learn the intricacies of the valve used in oil sampling during Transformer Oil Sampling Training. Virtual Reality (VR) training with XR programs offering an immersive exploration of the oil sampling valve.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/oil/mob/TOS-01.jpg",
            "Overview photo of the substation used in Transformer Oil Sampling Training. Gain a comprehensive view of the training environment for oil sampling procedures. Virtual Reality (VR) training with XR programs for effective and safe transformer oil sampling. Understand the layout and components of the substation in a simulated environment.",
          ],
          [
            "/assets/gallery/oil/mob/TOS-02.jpg",
            "Photo featuring checkboxes for mandatory equipment verification. Highlighting equipment check procedures in Transformer Oil Sampling Training. Virtual Reality (VR) training with XR programs emphasizing the importance of verifying essential equipment. Experience the interactive process of checking off mandatory equipment in a simulated environment.",
          ],
          [
            "/assets/gallery/oil/mob/TOS-03.jpg",
            "Photo capturing the moment of successfully completing Transformer Oil Sampling Training. Experience the satisfaction of mastering transformer oil sampling techniques in a simulated environment during Virtual Reality (VR) training with XR programs.",
          ],
          [
            "/assets/gallery/oil/mob/TOS-04.jpg",
            "Photo capturing the process of oil sampling from the substation. Gain insight into the practical steps of oil sampling procedures during Transformer Oil Sampling Training. Virtual Reality (VR) training with XR programs providing a detailed and immersive look into the oil sampling process.",
          ],
          [
            "/assets/gallery/oil/mob/TOS-05.jpg",
            "Photo depicting a safety induction session during Transformer Oil Sampling Training. Emphasize the importance of safety protocols through detailed safety briefings. 	Virtual Reality (VR) training with XR programs providing immersive safety training experiences.",
          ],
          [
            "/assets/gallery/oil/mob/TOS-06.jpg",
            "Photo illustrating the familiarization process with the oil sampling valve device. Learn the intricacies of the valve used in oil sampling during Transformer Oil Sampling Training. Virtual Reality (VR) training with XR programs offering an immersive exploration of the oil sampling valve.",
          ],
        ],
      },
      {
        pc: "/assets/slider/video/TOS.mp4",
        mob: null,
        pcThumb: "/assets/gallery/oil/TOS-01.jpg",
        mobThumb:
          "/assets/gallery/oil/mob/Landing-mobile-banner-592x1280-still-TOS.jpg",
      },
      "https://metaenga.com/download/pdf/Transformer-Oil-Sampling-VR-Training-Outline.pdf",
      "/assets/gallery/oil/card/card.webp",
      t(`1003.cardalt`),
      t(`1003.videoalt`),
      t(`1003.keywords`),
      "tos"
    ),
    //new TrainingInfoData(
    //	1009,
    //	'substation-transformer-isolation',
    //	'Substation Transformer Isolation',
    //	'Step-by-Step Procedure',
    //	'Delve into VR training focused on the detailed procedures of medium voltage substation transformer isolation and Lockout-Tagout (LOTO) procedures.',
    //	'This VR solution guides learners through substation operations: from entry and PPE use to equipment handling, permissions, apparatus identification, tests, operating disconnects and breakers, to applying protective grounds with a hot stick and LOTO devices.',
    //	'This specially crafted VR solution guides learners from outside the substation to the core of operations.',
    //	'20 min',
    //	['Single player', 'EU standard', 'English Ul', 'Voiceovers'],
    //	'PPE, Power Transformers, Safety Workplace, Operating Disconnects and Vacuum Circuit Breakers',
    //	'College, Trade school, Employee onboarding',
    //	'Single user',
    //	'No assessment',
    //	'Quest 2, Quest 3, Quest Pro, Pico 4',
    //	'English',
    //	'Standard',
    //	'https://www.youtube.com/embed/77i1JT1yxNU?autoplay=1&amp',
    //	'https://img.youtube.com/vi/77i1JT1yxNU/maxresdefault.jpg',
    //	null,
    //	null,
    //	null,
    //	null,
    //	null,
    //	null
    //),
    new TrainingInfoData(
      101,
      t(`101.linkid`),
      t(`101.name`),
      t(`101.shortname`),
      t(`101.category`),
      t(`101.shortdescr`),
      t(`101.descr`),
      t(`101.briefdescr`),
      t(`101.duration`),
      [t(`101.features_0`), t(`101.features_1`), t(`101.features_2`)],
      t(`101.objectives`),
      t(`101.audience`),
      t(`101.modes`),
      t(`101.assessment`),
      t(`101.available`),
      t(`101.languages`),
      t(`101.plan`),
      "https://www.youtube.com/embed/Nra0XAr0aWI?autoplay=1&amp",
      "https://img.youtube.com/vi/Nra0XAr0aWI/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/feeder/FRP-01.jpg",
            "Overview photo of feeder protection relays used in Feeder Protection Relay Training.Gain insights into the components and functionalities of feeder protection relays. Virtual Reality (VR) training with XR programs providing a comprehensive look into relay operations and maintenance.",
          ],
          [
            "/assets/gallery/feeder/FRP-02.jpg",
            "Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.",
          ],
          [
            "/assets/gallery/feeder/FRP-03.jpg",
            "Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.",
          ],
          [
            "/assets/gallery/feeder/FRP-04.jpg",
            "Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.",
          ],
          [
            "/assets/gallery/feeder/FRP-05.jpg",
            "Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.",
          ],
          [
            "/assets/gallery/feeder/FRP-06.jpg",
            "Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/feeder/mob/FRP-01.jpg",
            "Overview photo of feeder protection relays used in Feeder Protection Relay Training.Gain insights into the components and functionalities of feeder protection relays. Virtual Reality (VR) training with XR programs providing a comprehensive look into relay operations and maintenance.",
          ],
          [
            "/assets/gallery/feeder/mob/FRP-02.jpg",
            "Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.",
          ],
          [
            "/assets/gallery/feeder/mob/FRP-03.jpg",
            "Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.",
          ],
          [
            "/assets/gallery/feeder/mob/FRP-04.jpg",
            "Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.",
          ],
          [
            "/assets/gallery/feeder/mob/FRP-05.jpg",
            "Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.",
          ],
          [
            "/assets/gallery/feeder/mob/FRP-06.jpg",
            "Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.",
          ],
        ],
      },
      {
        pc: null,
        mob: null,
        pcThumb: "/assets/slider/poster/REF.jpg",
        mobThumb:
          "/assets/gallery/feeder/mob/Landing-mobile-banner-592x1280-still-FPR.jpg",
      },
      "https://metaenga.com/download/pdf/Feeder-Protection-Relay-VR-Training-Outline.pdf",
      "/assets/gallery/feeder/card/card.webp",
      t(`101.cardalt`),
      t(`101.videoalt`),
      t(`101.keywords`),
      null
    ),
    new TrainingInfoData(
      1008,
      t(`1008.linkid`),
      [t("1008.name_0"), t("1008.name_1")],
      t(`1008.shortname`),
      t(`1008.category`),
      t(`1008.shortdescr`),
      t(`1008.descr`),
      t(`1008.briefdescr`),
      t(`1008.duration`),
      [t(`1008.features_0`), t(`1008.features_1`), t(`1008.features_2`)],
      t(`1008.objectives`),
      t(`1008.audience`),
      t(`1008.modes`),
      t(`1008.assessment`),
      t(`1008.available`),
      t(`1008.languages`),
      t(`1008.plan`),
      "https://www.youtube.com/embed/rHW9grB-y8g?autoplay=1&amp",
      "https://img.youtube.com/vi/rHW9grB-y8g/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/jupth/Preview-image-jupth-01.jpg",
            'A first-person view in a virtual reality training simulation showing hands holding a high-voltage cable marked with a "550 mm" measurement, representing a step in the cable coupling installation process.',
          ],
          [
            "/assets/gallery/jupth/Preview-image-jupth-02.jpg",
            "Virtual reality simulation of a workbench with various tools and components laid out, including high-voltage cables and insulation materials, as part of a JUPTH Heat Shrink Cable Joint VR Training.",
          ],
          [
            "/assets/gallery/jupth/Preview-image-jupth-03.jpg",
            "Interactive VR training environment depicting a user's hands using a cutting tool on a high-voltage cable as part of learning the sequence of cable coupling installation.",
          ],
          [
            "/assets/gallery/jupth/Preview-image-jupth-04.jpg",
            "Close-up view in a VR simulation of a high-voltage cable prepared for coupling, showcasing the detailed texture of the three-layer heat shrinkable insulating tubing",
          ],
          [
            "/assets/gallery/jupth/Preview-image-jupth-05.jpg",
            "A virtual reality scenario demonstrating the process of connecting high-voltage cables using a specialized clamp, illustrating the correct installation technique as per training guidelines.",
          ],
          [
            "/assets/gallery/jupth/Preview-image-jupth-06.jpg",
            "Dynamic VR training scene where a user is simulating the heat shrinking process on a high-voltage cable joint, with visual effects indicating the application of heat.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/jupth/mob/Preview-image-jupth-01-m.jpg",
            "A first-person view in a virtual reality training simulation showing hands holding a high-voltage cable marked with a '550 mm' measurement, representing a step in the cable coupling installation process.",
          ],
          [
            "/assets/gallery/jupth/mob/Preview-image-jupth-02-m.jpg",
            "Virtual reality simulation of a workbench with various tools and components laid out, including high-voltage cables and insulation materials, as part of a JUPTH Heat Shrink Cable Joint VR Training.",
          ],
          [
            "/assets/gallery/jupth/mob/Preview-image-jupth-03-m.jpg",
            "Interactive VR training environment depicting a user's hands using a cutting tool on a high-voltage cable as part of learning the sequence of cable coupling installation.",
          ],
          [
            "/assets/gallery/jupth/mob/Preview-image-jupth-04-m.jpg",
            "Close-up view in a VR simulation of a high-voltage cable prepared for coupling, showcasing the detailed texture of the three-layer heat shrinkable insulating tubing.",
          ],
          [
            "/assets/gallery/jupth/mob/Preview-image-jupth-05-m.jpg",
            "A virtual reality scenario demonstrating the process of connecting high-voltage cables using a specialized clamp, illustrating the correct installation technique as per training guidelines.",
          ],
          [
            "/assets/gallery/jupth/mob/Preview-image-jupth-06-m.jpg",
            "Dynamic VR training scene where a user is simulating the heat shrinking process on a high-voltage cable joint, with visual effects indicating the application of heat.",
          ],
        ],
      },
      {
        pc: null,
        mob: null,
        pcThumb: "/assets/gallery/jupth/jupth-prev.jpg",
        mobThumb:
          "/assets/gallery/jupth/mob/Landing-mobile-banner-592x1280-JUPTH.jpg",
      },
      null,
      "/assets/gallery/jupth/card/card.webp",
      t(`1008.cardalt`),
      t(`1008.videoalt`),
      t(`1008.keywords`),
      "hs"
    ),
    new TrainingInfoData(
      1016,
      t(`1016.linkid`),
      [t("1016.name_0"), t("1016.name_1")],
      t(`1016.shortname`),
      t(`1016.category`),
      t(`1016.shortdescr`),
      t(`1016.descr`),
      t(`1016.briefdescr`),
      t(`1016.duration`),
      [t(`1016.features_0`), t(`1016.features_1`), t(`1016.features_2`)],
      t(`1016.objectives`),
      t(`1016.audience`),
      t(`1016.modes`),
      t(`1016.assessment`),
      t(`1016.available`),
      t(`1016.languages`),
      t(`1016.plan`),
      "https://www.youtube.com/embed/qdCXJzKqTCs?autoplay=1&amp",
      "https://img.youtube.com/vi/qdCXJzKqTCs/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/forklift/Preview-image-frk-1280x720-01-min.jpg",
            "Virtual reality simulation of a forklift in a logistics environment with an interactive feedback system showing emoji-based ratings for the inspection process.",
          ],
          [
            "/assets/gallery/forklift/Preview-image-frk-1280x720-02-min.jpg",
            "First-person view in a VR training session showing a hand pointing to the forklift's hydraulics with options to repeat, proceed, and highlight inspection points.",
          ],
          [
            "/assets/gallery/forklift/Preview-image-frk-1280x720-03-min.jpg",
            "VR perspective of a forklift's fork arms with on-screen prompts to locate and inspect the fork arms attachment, enhancing thorough pre-use checks.",
          ],
          [
            "/assets/gallery/forklift/Preview-image-frk-1280x720-04-min.jpg",
            "Close-up of a VR trainee's hands manipulating the forklift's control levers, with virtual prompts guiding the inspection of operational controls.",
          ],
          [
            "/assets/gallery/forklift/Preview-image-frk-1280x720-05-min.jpg",
            "VR simulation of a forklift driver's perspective, focusing on the steering wheel and the importance of inspecting the forklift's driving mechanisms.",
          ],
          [
            "/assets/gallery/forklift/Preview-image-frk-1280x720-06-min.jpg",
            "A virtual notification center in a VR training environment, displaying a checklist with inspection results and a perfect score for the forklift pre-use check.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/forklift/mob/Preview-image-frk-720x405-01-m-min.jpg",
            "Virtual reality simulation of a forklift in a logistics environment with an interactive feedback system showing emoji-based ratings for the inspection process.",
          ],
          [
            "/assets/gallery/forklift/mob/Preview-image-frk-720x405-02-m-min.jpg",
            "First-person view in a VR training session showing a hand pointing to the forklift's hydraulics with options to repeat, proceed, and highlight inspection points.",
          ],
          [
            "/assets/gallery/forklift/mob/Preview-image-frk-720x405-03-m-min.jpg",
            "VR perspective of a forklift's fork arms with on-screen prompts to locate and inspect the fork arms attachment, enhancing thorough pre-use checks.",
          ],
          [
            "/assets/gallery/forklift/mob/Preview-image-frk-720x405-04-m-min.jpg",
            "Close-up of a VR trainee's hands manipulating the forklift's control levers, with virtual prompts guiding the inspection of operational controls.",
          ],
          [
            "/assets/gallery/forklift/mob/Preview-image-frk-720x405-05-m-min.jpg",
            "VR simulation of a forklift driver's perspective, focusing on the steering wheel and the importance of inspecting the forklift's driving mechanisms.",
          ],
          [
            "/assets/gallery/forklift/mob/Preview-image-frk-720x405-06-m-min.jpg",
            "A virtual notification center in a VR training environment, displaying a checklist with inspection results and a perfect score for the forklift pre-use check.",
          ],
        ],
      },
      {
        pc: null,
        mob: null,
        pcThumb: "/assets/gallery/forklift/forklift-prev.jpg",
        mobThumb:
          "/assets/gallery/forklift/mob/Landing-mobile-forklift-592x1280-min.jpg",
      },
      null,
      "/assets/gallery/forklift/card/card.webp",
      t(`1016.cardalt`),
      t(`1016.videoalt`),
      t(`1016.keywords`),
      "forklift"
    ),
    new TrainingInfoData(
      1007,
      t(`1007.linkid`),
      t(`1007.name`),
      t(`1007.shortname`),
      t(`1007.category`),
      t(`1007.shortdescr`),
      t(`1007.descr`),
      t(`1007.briefdescr`),
      t(`1007.duration`),
      [t(`1007.features_0`), t(`1007.features_1`), t(`1007.features_2`)],
      t(`1007.objectives`),
      t(`1007.audience`),
      t(`1007.modes`),
      t(`1007.assessment`),
      t(`1007.available`),
      t(`1007.languages`),
      t(`1007.plan`),
      "https://www.youtube.com/embed/mfGnx4rCf0g?autoplay=1&amp",
      "https://img.youtube.com/vi/mfGnx4rCf0g/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/warehouse/Preview-image-wrh-01-min.jpg",
            "A virtual reality training interface in a warehouse setting, with a notification center welcoming users to Virtual Warehouse Training, instructing on the basics of a warehouse picker's role.",
          ],
          [
            "/assets/gallery/warehouse/Preview-image-wrh-02-min.jpg",
            "Inside a virtual warehouse, a digital screen displays an item localization list, detailing the order-picking process for items such as HDMI cables.",
          ],
          [
            "/assets/gallery/warehouse/Preview-image-wrh-03-min.jpg",
            "A VR simulation of a warehouse worker at a computer station, managing logistics data, representing interactive learning of warehouse operations and supply chain management.",
          ],
          [
            "/assets/gallery/warehouse/Preview-image-wrh-04-min.jpg",
            "Virtual environment depicting a warehouse picker's hands reaching into a cardboard box to 'take' an item, as part of the order fulfillment process in a VR training module.",
          ],
          [
            "/assets/gallery/warehouse/Preview-image-wrh-05-min.jpg",
            "First-person view in VR of navigating a warehouse on a forklift, simulating the process of picking and transporting goods within a modern warehouse setting.",
          ],
          [
            "/assets/gallery/warehouse/Preview-image-wrh-06-min.jpg",
            "A virtual notification center in a warehouse VR simulation, congratulating the user on completing the training and providing options to restart or exit to the main menu.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/warehouse/mob/Preview-image-wrh-01-m-min.jpg",
            "A virtual reality training interface in a warehouse setting, with a notification center welcoming users to Virtual Warehouse Training, instructing on the basics of a warehouse picker's role.",
          ],
          [
            "/assets/gallery/warehouse/mob/Preview-image-wrh-02-m-min.jpg",
            "Inside a virtual warehouse, a digital screen displays an item localization list, detailing the order-picking process for items such as HDMI cables.",
          ],
          [
            "/assets/gallery/warehouse/mob/Preview-image-wrh-03-m-min.jpg",
            "A VR simulation of a warehouse worker at a computer station, managing logistics data, representing interactive learning of warehouse operations and supply chain management.",
          ],
          [
            "/assets/gallery/warehouse/mob/Preview-image-wrh-04-m-min.jpg",
            "Virtual environment depicting a warehouse picker's hands reaching into a cardboard box to 'take' an item, as part of the order fulfillment process in a VR training module.",
          ],
          [
            "/assets/gallery/warehouse/mob/Preview-image-wrh-05-m-min.jpg",
            "First-person view in VR of navigating a warehouse on a forklift, simulating the process of picking and transporting goods within a modern warehouse setting.",
          ],
          [
            "/assets/gallery/warehouse/mob/Preview-image-wrh-06-m-min.jpg",
            "A virtual notification center in a warehouse VR simulation, congratulating the user on completing the training and providing options to restart or exit to the main menu.",
          ],
        ],
      },
      {
        pc: null,
        mob: null,
        pcThumb: "/assets/gallery/warehouse/warehouse-prev.jpg",
        mobThumb:
          "/assets/gallery/warehouse/mob/Landing-mobile-wrh-592x1280-min.jpg",
      },
      null,
      "/assets/gallery/warehouse/card/card.webp",
      t(`1007.cardalt`),
      t(`1007.videoalt`),
      t(`1007.keywords`),
      "warehouse"
    ),
    new TrainingInfoData(
      2002,
      t(`2002.linkid`),
      t(`2002.name`),
      t(`2002.shortname`),
      t(`2002.category`),
      t(`2002.shortdescr`),
      t(`2002.descr`),
      t(`2002.briefdescr`),
      t(`2002.duration`),
      [t(`2002.features_0`), t(`2002.features_1`), t(`2002.features_2`)],
      t(`2002.objectives`),
      t(`2002.audience`),
      t(`2002.modes`),
      t(`2002.assessment`),
      t(`2002.available`),
      t(`2002.languages`),
      t(`2002.plan`),
      "https://www.youtube.com/embed/c4ugaMLcBsY?autoplay=1&amp",
      "https://img.youtube.com/vi/c4ugaMLcBsY/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/helicopter/Preview-image-heli-01-min.jpg",
            "First-person view in a VR training simulation showing the hands of a Helicopter Landing Officer holding illuminated batons on a landing pad, practicing for the guidance of the AH-64 Apache.",
          ],
          [
            "/assets/gallery/helicopter/Preview-image-heli-02-min.jpg",
            "Virtual reality perspective of a Helicopter Landing Officer directing an AH-64 Apache helicopter approaching a landing zone at dusk, demonstrating coordination and landing procedures.",
          ],
          [
            "/assets/gallery/helicopter/Preview-image-heli-03-min.jpg",
            "VR simulation capturing the moment an AH-64 Apache helicopter lands on the helipad, with the pilot performing precise maneuvers under the guidance of landing officers.",
          ],
          [
            "/assets/gallery/helicopter/Preview-image-heli-04-min.jpg",
            "Close-up view of an AH-64 Apache helicopter cockpit in a VR training environment, highlighting the interaction between pilots and landing officers during landing procedures.",
          ],
          [
            "/assets/gallery/helicopter/Preview-image-heli-05-min.jpg",
            "Detailed side view of an AH-64 Apache in a virtual training scenario, showcasing the helicopter's weaponry and landing gear as part of landing operation familiarization.",
          ],
          [
            "/assets/gallery/helicopter/Preview-image-heli-06-min.jpg",
            "The AH-64 Apache helicopter in a VR simulation parked on the helipad post-landing, emphasizing the successful completion of a landing exercise under varying conditions.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/helicopter/mob/Preview-image-heli-01-m-min.jpg",
            "First-person view in a VR training simulation showing the hands of a Helicopter Landing Officer holding illuminated batons on a landing pad, practicing for the guidance of the AH-64 Apache.",
          ],
          [
            "/assets/gallery/helicopter/mob/Preview-image-heli-02-m-min.jpg",
            "Virtual reality perspective of a Helicopter Landing Officer directing an AH-64 Apache helicopter approaching a landing zone at dusk, demonstrating coordination and landing procedures.",
          ],
          [
            "/assets/gallery/helicopter/mob/Preview-image-heli-03-m-min.jpg",
            "VR simulation capturing the moment an AH-64 Apache helicopter lands on the helipad, with the pilot performing precise maneuvers under the guidance of landing officers.",
          ],
          [
            "/assets/gallery/helicopter/mob/Preview-image-heli-04-m-min.jpg",
            "Close-up view of an AH-64 Apache helicopter cockpit in a VR training environment, highlighting the interaction between pilots and landing officers during landing procedures.",
          ],
          [
            "/assets/gallery/helicopter/mob/Preview-image-heli-05-m-min.jpg",
            "Detailed side view of an AH-64 Apache in a virtual training scenario, showcasing the helicopter's weaponry and landing gear as part of landing operation familiarization.",
          ],
          [
            "/assets/gallery/helicopter/mob/Preview-image-heli-06-m-min.jpg",
            "The AH-64 Apache helicopter in a VR simulation parked on the helipad post-landing, emphasizing the successful completion of a landing exercise under varying conditions.",
          ],
        ],
      },
      {
        pc: null,
        mob: null,
        pcThumb: "/assets/gallery/helicopter/helicopter-prev.jpg",
        mobThumb:
          "/assets/gallery/helicopter/mob/Landing-mobile-heli-592x1280-min.jpg",
      },
      null,
      "/assets/gallery/helicopter/card/card.webp",
      t(`2002.cardalt`),
      t(`2002.videoalt`),
      t(`2002.keywords`),
      "hlo"
    ),
    new TrainingInfoData(
      1018,
      t(`1018.linkid`),
      t(`1018.name`),
      t(`1018.shortname`),
      t(`1018.category`),
      [t(`1018.shortdescr_0`), t(`1018.shortdescr_1`)],
      t(`1018.descr`),
      t(`1018.briefdescr`),
      t(`1018.duration`),
      [t(`1018.features_0`), t(`1018.features_1`), t(`1018.features_2`)],
      t(`1018.objectives`),
      t(`1018.audience`),
      t(`1018.modes`),
      t(`1018.assessment`),
      t(`1018.available`),
      t(`1018.languages`),
      t(`1018.plan`),
      "https://www.youtube.com/embed/10BDmdf8uIk?autoplay=1&amp",
      "https://img.youtube.com/vi/10BDmdf8uIk/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/mcc/1.jpg",
            "Motor Control Center Troubleshooting in a VR environment, showcasing electrical panels, safety labels, and a toolbox for electrical safety training.",
          ],
          [
            "/assets/gallery/mcc/2.jpg",
            "VR module showing a hand switching a multimeter mode during Motor Control Center Troubleshooting, emphasizing electrical safety and proper PPE usage.",
          ],
          [
            "/assets/gallery/mcc/3.jpg",
            "VR module displaying an Arc Flash and Shock Risk warning label with a checklist for appropriate PPE, emphasizing electrical safety and compliance with NFPA 70E standards.",
          ],
          [
            "/assets/gallery/mcc/4.jpg",
            "VR module demonstrating MCC troubleshooting with a multimeter showing 480.3V, highlighting electrical safety practices and proper PPE usage.",
          ],
          [
            "/assets/gallery/mcc/5.jpg",
            "VR training room showing PPE gear including arc-rated coveralls, gloves, and helmets, with a checklist for electrical safety equipment.",
          ],
          [
            "/assets/gallery/mcc/6.jpg",
            "VR module verifying absence of voltage during Motor Control Center troubleshooting, showing a hand using a multimeter and safety instructions for phase-to-phase and phase-to-ground testing.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/mcc/mob/1.jpg",
            "Motor Control Center Troubleshooting in a VR environment, showcasing electrical panels, safety labels, and a toolbox for electrical safety training.",
          ],
          [
            "/assets/gallery/mcc/mob/2.jpg",
            "VR module showing a hand switching a multimeter mode during Motor Control Center Troubleshooting, emphasizing electrical safety and proper PPE usage.",
          ],
          [
            "/assets/gallery/mcc/mob/3.jpg",
            "VR module displaying an Arc Flash and Shock Risk warning label with a checklist for appropriate PPE, emphasizing electrical safety and compliance with NFPA 70E standards.",
          ],
          [
            "/assets/gallery/mcc/mob/4.jpg",
            "VR module demonstrating MCC troubleshooting with a multimeter showing 480.3V, highlighting electrical safety practices and proper PPE usage.",
          ],
          [
            "/assets/gallery/mcc/mob/5.jpg",
            "VR training room showing PPE gear including arc-rated coveralls, gloves, and helmets, with a checklist for electrical safety equipment.",
          ],
          [
            "/assets/gallery/mcc/mob/6.jpg",
            "VR module verifying absence of voltage during Motor Control Center troubleshooting, showing a hand using a multimeter and safety instructions for phase-to-phase and phase-to-ground testing.",
          ],
        ],
      },
      {
        pc: "/assets/slider/video/MCC.mp4",
        mob: null,
        pcThumb: "/assets/gallery/mcc/bg.jpg",
        mobThumb: "/assets/gallery/mcc/mob/bg-mob.jpg",
      },
      "",
      "/assets/gallery/mcc/card/card.webp",
      t(`1018.cardalt`),
      t(`1018.videoalt`),
      t(`1018.keywords`),
      "mcc"
    ),
    new TrainingInfoData(
      1011,
      t(`1011.linkid`),
      t(`1011.name`),
      t(`1011.shortname`),
      t(`1011.category`),
      t(`1011.shortdescr`),
      t(`1011.descr`),
      t(`1011.briefdescr`),
      t(`1011.duration`),
      [t(`1011.features_0`), t(`1011.features_1`), t(`1011.features_2`)],
      t(`1011.objectives`),
      t(`1011.audience`),
      t(`1011.modes`),
      t(`1011.assessment`),
      t(`1011.available`),
      t(`1011.languages`),
      t(`1011.plan`),
      "https://www.youtube.com/embed/LvHcu0MIcsw?autoplay=1&amp",
      "https://img.youtube.com/vi/LvHcu0MIcsw/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/fs/1.jpg",
            "Immersive VR training module showing fire safety and emergency response in an office setting, with flames and smoke to simulate a real-world fire scenario.",
          ],
          [
            "/assets/gallery/fs/2.jpg",
            "Virtual hand activating an emergency call button during a VR fire safety training, demonstrating the protocol for responding to a fire emergency in a simulated environment.",
          ],
          [
            "/assets/gallery/fs/3.jpg",
            "Virtual hand grabbing a fire extinguisher from the wall during a VR fire safety training session, demonstrating the use of emergency equipment in a simulated fire scenario.",
          ],
          [
            "/assets/gallery/fs/4.jpg",
            "Virtual hands removing the seal and pin from a fire extinguisher in a VR fire safety training, surrounded by simulated flames in an office environment.",
          ],
          [
            "/assets/gallery/fs/5.jpg",
            "Simulated path guiding towards an emergency exit in a VR fire safety training environment, highlighting the importance of knowing escape routes during a fire emergency.",
          ],
          [
            "/assets/gallery/fs/6.jpg",
            "View through glass doors into a burning office during a VR fire safety training, illustrating the spread of fire and the need for quick evacuation.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/fs/mob/1.jpg",
            "Immersive VR training module showing fire safety and emergency response in an office setting, with flames and smoke to simulate a real-world fire scenario.",
          ],
          [
            "/assets/gallery/fs/mob/2.jpg",
            "Virtual hand activating an emergency call button during a VR fire safety training, demonstrating the protocol for responding to a fire emergency in a simulated environment.",
          ],
          [
            "/assets/gallery/fs/mob/3.jpg",
            "Virtual hand grabbing a fire extinguisher from the wall during a VR fire safety training session, demonstrating the use of emergency equipment in a simulated fire scenario.",
          ],
          [
            "/assets/gallery/fs/mob/4.jpg",
            "Virtual hands removing the seal and pin from a fire extinguisher in a VR fire safety training, surrounded by simulated flames in an office environment.",
          ],
          [
            "/assets/gallery/fs/mob/5.jpg",
            "Simulated path guiding towards an emergency exit in a VR fire safety training environment, highlighting the importance of knowing escape routes during a fire emergency.",
          ],
          [
            "/assets/gallery/fs/mob/6.jpg",
            "View through glass doors into a burning office during a VR fire safety training, illustrating the spread of fire and the need for quick evacuation.",
          ],
        ],
      },
      {
        pc: "/assets/slider/video/FS.mp4",
        mob: null,
        pcThumb: "/assets/gallery/fs/fs-prev.jpg",
        mobThumb: "/assets/gallery/fs/mob/prev-mob.jpg",
      },
      null,
      "/assets/gallery/fs/card/card.webp",
      t(`1011.cardalt`),
      t(`1011.videoalt`),
      t(`1011.keywords`),
      "fs"
    ),
    new TrainingInfoData(
      1009,
      t(`1009.linkid`),
      t(`1009.name`),
      t(`1009.shortname`),
      t(`1009.category`),
      t(`1009.shortdescr`),
      t(`1009.descr`),
      t(`1009.briefdescr`),
      t(`1009.duration`),
      [t(`1009.features_0`), t(`1009.features_1`), t(`1009.features_2`)],
      t(`1009.objectives`),
      t(`1009.audience`),
      t(`1009.modes`),
      t(`1009.assessment`),
      t(`1009.available`),
      t(`1009.languages`),
      t(`1009.plan`),
      "",
      "",
      {
        pc: [
          [
            "/assets/gallery/mv/1.jpg",
            "VR Training Module for MV Substation Transformer Isolating, showing equipment handling and safety procedures with PPE. Includes a transformer, hot stick, and protective grounds setup in a substation environment.",
          ],
          [
            "/assets/gallery/mv/2.jpg",
            "VR Training Module showing the identification of apparatus in a MV substation. Includes power transformers, SF6 breaker, air break switch, and vacuum circuit breakers. Notification center provides instructions on hazard scanning and apparatus familiarization for electrical safety training.",
          ],
          [
            "/assets/gallery/mv/3.jpg",
            "VR Training Module demonstrating the preparation of PPE (Personal Protective Equipment) for electrical safety. Includes hard hats, face shields, insulated gloves, and safety glasses laid out on a table near a vehicle in a substation environment.",
          ],
          [
            "/assets/gallery/mv/4.jpg",
            "VR Training Module demonstrating the locking procedure of a substation control cabinet using LOTO (Lockout Tagout) devices. Includes a close-up of a hand wearing insulated gloves, engaging the lock on a blue control cabinet in a substation environment.",
          ],
          [
            "/assets/gallery/mv/5.jpg",
            "VR Training Module demonstrating the use of a hot stick for applying protective grounds in a substation environment. Includes a close-up of a hand wearing insulated gloves, holding a hot stick to engage electrical equipment overhead.",
          ],
          [
            "/assets/gallery/mv/6.jpg",
            "VR Training Module showing the procedure of opening a substation control cabinet labeled with a warning sign for electrical hazards. Includes a close-up of a hand wearing insulated gloves, operating the handle of a blue control cabinet in a substation environment.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/mv/mob/1.jpg",
            "VR Training Module for MV Substation Transformer Isolating, showing equipment handling and safety procedures with PPE. Includes a transformer, hot stick, and protective grounds setup in a substation environment.",
          ],
          [
            "/assets/gallery/mv/mob/2.jpg",
            "VR Training Module showing the identification of apparatus in a MV substation. Includes power transformers, SF6 breaker, air break switch, and vacuum circuit breakers. Notification center provides instructions on hazard scanning and apparatus familiarization for electrical safety training.",
          ],
          [
            "/assets/gallery/mv/mob/3.jpg",
            "VR Training Module demonstrating the preparation of PPE (Personal Protective Equipment) for electrical safety. Includes hard hats, face shields, insulated gloves, and safety glasses laid out on a table near a vehicle in a substation environment.",
          ],
          [
            "/assets/gallery/mv/mob/4.jpg",
            "VR Training Module demonstrating the locking procedure of a substation control cabinet using LOTO (Lockout Tagout) devices. Includes a close-up of a hand wearing insulated gloves, engaging the lock on a blue control cabinet in a substation environment.",
          ],
          [
            "/assets/gallery/mv/mob/5.jpg",
            "VR Training Module demonstrating the use of a hot stick for applying protective grounds in a substation environment. Includes a close-up of a hand wearing insulated gloves, holding a hot stick to engage electrical equipment overhead.",
          ],
          [
            "/assets/gallery/mv/mob/6.jpg",
            "VR Training Module showing the procedure of opening a substation control cabinet labeled with a warning sign for electrical hazards. Includes a close-up of a hand wearing insulated gloves, operating the handle of a blue control cabinet in a substation environment.",
          ],
        ],
      },
      {
        pc: "",
        mob: null,
        pcThumb: "/assets/gallery/mv/bg.jpg",
        mobThumb: "/assets/gallery/mv/mob/bg-mob.jpg",
      },
      null,
      "/assets/gallery/mv/card/card.webp",
      t(`1009.cardalt`),
      t(`1009.videoalt`),
      t(`1009.keywords`),
      "mv"
    ),
    new TrainingInfoData(
      1021,
      t(`1021.linkid`),
      t(`1021.name`),
      t(`1021.shortname`),
      t(`1021.category`),
      [t(`1021.shortdescr_0`), t(`1021.shortdescr_1`)],
      t(`1021.descr`),
      t(`1021.briefdescr`),
      t(`1021.duration`),
      [t(`1021.features_0`), t(`1021.features_1`), t(`1021.features_2`)],
      t(`1021.objectives`),
      t(`1021.audience`),
      t(`1021.modes`),
      t(`1021.assessment`),
      t(`1021.available`),
      t(`1021.languages`),
      t(`1021.plan`),
      "https://www.youtube.com/embed/xAp69SMQ1zM?autoplay=1&amp",
      "https://img.youtube.com/vi/xAp69SMQ1zM/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/dmb/digital-multimeter-vr-training.jpg",
            "VR training on digital multimeter basics for electrical measurements",
          ],
          [
            "/assets/gallery/dmb/vr-electrical-measurement-training.jpg",
            "Virtual reality multimeter testing for voltage, resistance, and continuity",
          ],
          [
            "/assets/gallery/dmb/virtual-reality-multimeter-course.jpg",
            "Hands-on VR electrical training with realistic troubleshooting scenarios",
          ],
          [
            "/assets/gallery/dmb/hands-on-vr-electrical-training.jpg",
            "Electrician using VR simulation for safe and interactive learning",
          ],
          [
            "/assets/gallery/dmb/troubleshooting-multimeter-simulation-vr.jpg",
            "Virtual reality training for digital multimeter usage in industrial environments",
          ],
          [
            "/assets/gallery/dmb/electrical-measurement-vr-training.jpg",
            "Electrical measurement VR training for hands-on digital multimeter practice",
          ],
        ],
        mob: [
          [
            "/assets/gallery/dmb/mob/digital-multimeter-vr-training.jpg",
            "VR training on digital multimeter basics for electrical measurements",
          ],
          [
            "/assets/gallery/dmb/mob/vr-electrical-measurement-training.jpg",
            "Virtual reality multimeter testing for voltage, resistance, and continuity",
          ],
          [
            "/assets/gallery/dmb/mob/virtual-reality-multimeter-course.jpg",
            "Hands-on VR electrical training with realistic troubleshooting scenarios",
          ],
          [
            "/assets/gallery/dmb/mob/hands-on-vr-electrical-training.jpg",
            "Electrician using VR simulation for safe and interactive learning",
          ],
          [
            "/assets/gallery/dmb/mob/troubleshooting-multimeter-simulation-vr.jpg",
            "Virtual reality training for digital multimeter usage in industrial environments",
          ],
          [
            "/assets/gallery/dmb/mob/electrical-measurement-vr-training.jpg",
            "Electrical measurement VR training for hands-on digital multimeter practice",
          ],
        ],
      },
      {
        pc: "/assets/slider/video/DMB.mp4",
        mob: null,
        pcThumb:
          "/assets/gallery/dmb/Fallback-main-dmb-1920x774-dark_00000.jpg",
        mobThumb: "/assets/gallery/dmb/mob/Fallback-dmb-720x1280_00000.jpg",
      },
      null,
      "/assets/gallery/dmb/card/Discover-banner-dmb-688x386_00000.jpg",
      t(`1021.cardalt`),
      t(`1021.videoalt`),
      t(`1021.keywords`),
      "dmb"
    ),
    new TrainingInfoData(
      1023,
      t(`1023.linkid`),
      [t(`1023.name_0`), t(`1023.name_1`)],
      t(`1023.shortname`),
      t(`1023.category`),
      [t(`1023.shortdescr_0`), t(`1023.shortdescr_1`)],
      t(`1023.descr`),
      t(`1023.briefdescr`),
      t(`1023.duration`),
      [t(`1023.features_0`), t(`1023.features_1`), t(`1023.features_2`)],
      t(`1023.objectives`),
      t(`1023.audience`),
      t(`1023.modes`),
      t(`1023.assessment`),
      t(`1023.available`),
      t(`1023.languages`),
      t(`1021.plan`),
      "https://www.youtube.com/embed/InpVxpwNKMI?autoplay=1&amp",
      "https://img.youtube.com/vi/InpVxpwNKMI/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/rct/Preview-image-mrct-01_00000.jpg",
            "VR training environment showing a modern testing lab setup with MRCT device and accessories on the table.",
          ],
          [
            "/assets/gallery/rct/Preview-image-mrct-02_00000.jpg",
            "Close-up of the MRCT test unit with color-coded test leads arranged for current transformer testing.",
          ],
          [
            "/assets/gallery/rct/Preview-image-mrct-03_00000.jpg",
            "MRCT device connected to testing cables, positioned near a screen displaying a wiring diagram.",
          ],
          [
            "/assets/gallery/rct/Preview-image-mrct-04_00000.jpg",
            "VR interface showing test results and graphs on a large screen in a simulated lab environment.",
          ],
          [
            "/assets/gallery/rct/Preview-image-mrct-05_00000.jpg",
            "Tabletop view of coiled test leads, clamps, and accessories used in relay and CT testing.",
          ],
          [
            "/assets/gallery/rct/Preview-image-mrct-06_00000.jpg",
            "Simulated electrical lab scene with CT cables connected to the MRCT, demonstrating resistance testing.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/rct/mob/Preview-image-mrct-01_00000.jpg",
            "VR training environment showing a modern testing lab setup with MRCT device and accessories on the table.",
          ],
          [
            "/assets/gallery/rct/mob/Preview-image-mrct-02_00000.jpg",
            "Close-up of the MRCT test unit with color-coded test leads arranged for current transformer testing.",
          ],
          [
            "/assets/gallery/rct/mob/Preview-image-mrct-03_00000.jpg",
            "MRCT device connected to testing cables, positioned near a screen displaying a wiring diagram.",
          ],
          [
            "/assets/gallery/rct/mob/Preview-image-mrct-04_00000.jpg",
            "VR interface showing test results and graphs on a large screen in a simulated lab environment.",
          ],
          [
            "/assets/gallery/rct/mob/Preview-image-mrct-05_00000.jpg",
            "Tabletop view of coiled test leads, clamps, and accessories used in relay and CT testing.",
          ],
          [
            "/assets/gallery/rct/mob/Preview-image-mrct-06_00000.jpg",
            "Simulated electrical lab scene with CT cables connected to the MRCT, demonstrating resistance testing.",
          ],
        ],
      },
      {
        pc: null,
        mob: null,
        pcThumb:
          "/assets/gallery/rct/Fallback-main-mrct-1920x774-dark_00000.jpg",
        mobThumb:
          "/assets/gallery/rct/mob/Fallback-main-mrct-720-1280_00000.jpg",
      },
      null,
      "/assets/gallery/rct/card/Discover-banner-mrct-688x386_00000.jpg",
      t(`1023.cardalt`),
      t(`1023.videoalt`),
      t(`1023.keywords`),
      "rct"
    ),
    new TrainingInfoData(
      1027,
      t(`1027.linkid`),
      t(`1027.name`),
      t(`1027.shortname`),
      t(`1027.category`),
      t(`1027.shortdescr`),
      t(`1027.descr`),
      t(`1027.briefdescr`),
      t(`1027.duration`),
      [t(`1027.features_0`), t(`1027.features_1`)],
      t(`1027.objectives`),
      t(`1027.audience`),
      t(`1027.modes`),
      t(`1027.assessment`),
      t(`1027.available`),
      t(`1027.languages`),
      t(`1027.plan`),
      "https://www.youtube.com/embed/ONBVLW-srDc?autoplay=1&amp",
      "https://img.youtube.com/vi/ONBVLW-srDc/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/ieiloto/1.jpg",
            "User presses the emergency stop button on an industrial machine control panel during a Lockout-Tagout VR training scenario.",
          ],
          [
            "/assets/gallery/ieiloto/2.jpg",
            "User toggles the power switch on a 480V industrial control box while identifying electrical energy sources in a VR training simulation..",
          ],
          [
            "/assets/gallery/ieiloto/3.jpg",
            "User applies a Lockout-Tagout device on a machine valve handle, following a printed LOTO procedure checklist in the VR module.",
          ],
          [
            "/assets/gallery/ieiloto/4.jpg",
            "User selects the arc flash boundary on a VR interface quiz based on equipment labeling and arc flash rating.",
          ],
          [
            "/assets/gallery/ieiloto/5.jpg",
            "User uses a digital multimeter to verify voltage absence across phases in an electrical disconnect box, wearing proper PPE.",
          ],
          [
            "/assets/gallery/ieiloto/6.jpg",
            "Wide view of a simulated industrial plant floor with multiple machines, storage shelves, and designated work zones for VR safety training.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/ieiloto/mob/1.jpg",
            "User presses the emergency stop button on an industrial machine control panel during a Lockout-Tagout VR training scenario.",
          ],
          [
            "/assets/gallery/ieiloto/mob/2.jpg",
            "User toggles the power switch on a 480V industrial control box while identifying electrical energy sources in a VR training simulation.",
          ],
          [
            "/assets/gallery/ieiloto/mob/3.jpg",
            "User applies a Lockout-Tagout device on a machine valve handle, following a printed LOTO procedure checklist in the VR module.",
          ],
          [
            "/assets/gallery/ieiloto/mob/4.jpg",
            "User selects the arc flash boundary on a VR interface quiz based on equipment labeling and arc flash rating.",
          ],
          [
            "/assets/gallery/ieiloto/mob/5.jpg",
            "User uses a digital multimeter to verify voltage absence across phases in an electrical disconnect box, wearing proper PPE.",
          ],
          [
            "/assets/gallery/ieiloto/mob/6.jpg",
            "Wide view of a simulated industrial plant floor with multiple machines, storage shelves, and designated work zones for VR safety training.",
          ],
        ],
      },
      {
        pc: null,
        mob: null,
        pcThumb:
          "/assets/gallery/ieiloto/Fallback-main-iei-1920x774-dark_00000.jpg",
        mobThumb:
          "/assets/gallery/ieiloto/mob/Fallback-main-iei-720x1280_00000.jpg",
      },
      null,
      "/assets/gallery/ieiloto/card/Discover-banner-iei-688x386_00000.jpg",
      t(`1027.cardalt`),
      t(`1027.videoalt`),
      t(`1027.keywords`),
      "ieiloto"
    ),
    new TrainingInfoData(
      1030,
      t(`1030.linkid`),
      [t(`1030.name_0`), t(`1030.name_1`)] ,
      t(`1030.shortname`),
      t(`1030.category`),
      [t(`1030.shortdescr_0`),t(`1030.shortdescr_1`)],
      t(`1030.descr`),
      t(`1030.briefdescr`),
      t(`1030.duration`),
      [t(`1030.features_0`), t(`1030.features_1`), t(`1030.features_2`)],
      t(`1030.objectives`),
      t(`1030.audience`),
      t(`1030.modes`),
      t(`1030.assessment`),
      t(`1030.available`),
      t(`1030.languages`),
      t(`1030.plan`),
      "https://www.youtube.com/embed/_hEo9aeI0pU?autoplay=1&amp",
      "https://img.youtube.com/vi/_hEo9aeI0pU/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/wah/1.jpg",
            "Wide-angle view of a multilevel scaffold setup next to a glass building, with a large yellow crane towering above the training environment.",
          ],
          [
            "/assets/gallery/wah/2.jpg",
            "VR simulation showing gloved hands securing twin-leg lanyards to a horizontal lifeline near a scaffold edge.",
          ],
          [
            "/assets/gallery/wah/3.jpg",
            "Ladder climbing interface in VR with a warning label: “Do not release the ladder while ascending.” A self-retractable lifeline device is mounted above.",
          ],
          [
            "/assets/gallery/wah/4.jpg",
            "View from within the scaffold, showcasing the crane base and yard environment in the background, representing a realistic construction site.",
          ],
          [
            "/assets/gallery/wah/5.jpg",
            "VR perspective of attaching a chest ascender to a vertical rope on a scaffold ladder, simulating safe climbing practice.",
          ],
          [
            "/assets/gallery/wah/6.jpg",
            "Virtual instructor Alex stands on a scaffold platform, wearing a hard hat and safety gear, ready to brief the user at height..",
          ],
        ],
        mob: [
          [
            "/assets/gallery/wah/mob/1.jpg",
            "Wide-angle view of a multilevel scaffold setup next to a glass building, with a large yellow crane towering above the training environment.",
          ],
          [
            "/assets/gallery/wah/mob/2.jpg",
            "VR simulation showing gloved hands securing twin-leg lanyards to a horizontal lifeline near a scaffold edge.",
          ],
          [
            "/assets/gallery/wah/mob/3.jpg",
            "Ladder climbing interface in VR with a warning label: “Do not release the ladder while ascending.” A self-retractable lifeline device is mounted above.",
          ],
          [
            "/assets/gallery/wah/mob/4.jpg",
            "View from within the scaffold, showcasing the crane base and yard environment in the background, representing a realistic construction site.",
          ],
          [
            "/assets/gallery/wah/mob/5.jpg",
            "VR perspective of attaching a chest ascender to a vertical rope on a scaffold ladder, simulating safe climbing practice.",
          ],
          [
            "/assets/gallery/wah/mob/6.jpg",
            "Virtual instructor Alex stands on a scaffold platform, wearing a hard hat and safety gear, ready to brief the user at height.",
          ],
        ],
      },
      {
        pc: null,
        mob: null,
        pcThumb:
          "/assets/gallery/wah/Fallback-main-wah-1920x774_00000.jpg",
        mobThumb:
          "/assets/gallery/wah/mob/bg-mob.jpg",
      },
      null,
      "/assets/gallery/wah/card/Discover-banner-wah-688x386_00000.jpg",
      t(`1030.cardalt`),
      t(`1030.videoalt`),
      t(`1030.keywords`),
      'wah'
    ),
	new TrainingInfoData(
      1019,
      t(`1019.linkid`),
      [t(`1019.name_0`), t(`1019.name_1`)] ,
      t(`1019.shortname`),
      t(`1019.category`),
     [t(`1019.shortdescr_0`),t(`1019.shortdescr_1`)],
      t(`1019.descr`),
      t(`1019.briefdescr`),
      t(`1019.duration`),
      [t(`1019.features_0`), t(`1019.features_1`), t(`1019.features_2`)],
      t(`1019.objectives`),
      t(`1019.audience`),
      t(`1019.modes`),
      t(`1019.assessment`),
      t(`1019.available`),
      t(`1019.languages`),
      t(`1019.plan`),
      "https://www.youtube.com/embed/4esx3P0GzpU?autoplay=1&amp",
      "https://img.youtube.com/vi/4esx3P0GzpU/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/mar/1.jpg",
            "Virtual reality interface for marshaling training showing a vehicle selection menu. A dump truck is highlighted as the selected option, with a concrete mixer also available. The background features a construction yard with containers, a concrete mixer, and a crane tower under a bright blue sky.",
          ],
          [
            "/assets/gallery/mar/2.jpg",
            "Virtual reality training scene showing a construction worker in a high-visibility vest and hard hat signaling a white truck using a marshaling hand gesture. An instructional overlay appears on the left, guiding the user on how to perform the 'turn' gesture. The setting is a fenced construction yard with containers and site equipment.",
          ],
          [
            "/assets/gallery/mar/3.jpg",
            "Virtual training environment featuring an orange concrete mixer truck driving through a curved construction site road. The area is bordered by a blue fence, grassy verge, and scattered buildings under a bright, partly cloudy sky.",
          ],
          [
            "/assets/gallery/mar/4.jpg",
            "VR training scene where a construction worker in a reflective vest performs the 'Advance' marshaling gesture to guide a white truck forward. An on-screen instruction panel explains how to execute the gesture. The background includes site equipment, a red storage building, and a yellow crane structure.",
          ],
          [
            "/assets/gallery/mar/5.jpg",
            "Close-up of a concrete mixer truck’s rear wheels aligned precisely within a marked green parking zone on a gravel surface. The scene includes a blue storage container and construction materials in a fenced training yard.",
          ],
          [
            "/assets/gallery/mar/6.jpg",
            "VR training result screen for vehicle marshaling, showing performance metrics for a daylight session. The interface displays mode, maneuvers, trajectory, alignment, and accuracy. A trainee’s virtual hand points at the floating UI, with a parked dump truck and construction site in the background.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/mar/mob/1.jpg",
            "Virtual reality interface for marshaling training showing a vehicle selection menu. A dump truck is highlighted as the selected option, with a concrete mixer also available. The background features a construction yard with containers, a concrete mixer, and a crane tower under a bright blue sky.",
          ],
          [
            "/assets/gallery/mar/mob/2.jpg",
            "Virtual reality training scene showing a construction worker in a high-visibility vest and hard hat signaling a white truck using a marshaling hand gesture. An instructional overlay appears on the left, guiding the user on how to perform the 'turn' gesture. The setting is a fenced construction yard with containers and site equipment.",
          ],
          [
            "/assets/gallery/mar/mob/3.jpg",
            "Virtual training environment featuring an orange concrete mixer truck driving through a curved construction site road. The area is bordered by a blue fence, grassy verge, and scattered buildings under a bright, partly cloudy sky.",
          ],
          [
            "/assets/gallery/mar/mob/4.jpg",
            "VR training scene where a construction worker in a reflective vest performs the 'Advance' marshaling gesture to guide a white truck forward. An on-screen instruction panel explains how to execute the gesture. The background includes site equipment, a red storage building, and a yellow crane structure.",
          ],
          [
            "/assets/gallery/mar/mob/5.jpg",
            "Close-up of a concrete mixer truck’s rear wheels aligned precisely within a marked green parking zone on a gravel surface. The scene includes a blue storage container and construction materials in a fenced training yard.",
          ],
          [
            "/assets/gallery/mar/mob/6.jpg",
            "VR training result screen for vehicle marshaling, showing performance metrics for a daylight session. The interface displays mode, maneuvers, trajectory, alignment, and accuracy. A trainee’s virtual hand points at the floating UI, with a parked dump truck and construction site in the background.",
          ],
        ],
      },
      {
        pc: null,
        mob: null,
        pcThumb:
          "/assets/gallery/mar/Fallback-main-mar-1920x774_00000.jpg",
         mobThumb: "/assets/gallery/mar/mob/bg-mob.jpg",
      },
      null,
      "/assets/gallery/mar/card/Discover-banner-mar-688x386_00000.jpg",
      t(`1019.cardalt`),
      t(`1019.videoalt`),
      t(`1019.keywords`),
      'mar'
    ),
	new TrainingInfoData(
      1013,
      t(`1013.linkid`),
      [t(`1013.name_0`), t(`1013.name_1`)] ,
      t(`1013.shortname`),
      t(`1013.category`),
       [t(`1013.shortdescr_0`),t(`1013.shortdescr_1`)],
      t(`1013.descr`),
      t(`1013.briefdescr`),
      t(`1013.duration`),
      [t(`1013.features_0`), t(`1013.features_1`), t(`1013.features_2`)],
      t(`1013.objectives`),
      t(`1013.audience`),
      t(`1013.modes`),
      t(`1013.assessment`),
      t(`1013.available`),
      t(`1013.languages`),
      t(`1013.plan`),
      "https://www.youtube.com/embed/rnsxpuRPnkY?autoplay=1&amp",
      "https://img.youtube.com/vi/rnsxpuRPnkY/maxresdefault.jpg",
      {
        pc: [
          [
            "/assets/gallery/mup/1.jpg",
            "Open utility truck compartment showing required PPE including safety boots, high-visibility vest, hard hat, safety gloves, and protective eyewear, laid out in a desert substation environment.",
          ],
          [
            "/assets/gallery/mup/2.jpg",
            "User holding a yellow two-way radio while reviewing a virtual System Operations Clearance Order next to a utility truck, preparing for switching procedures.",
          ],
          [
            "/assets/gallery/mup/3.jpg",
            "Technician with insulated gloves stands in front of an opened motor operator cabinet, inspecting internal components and control switches for local manual operation.",
          ],
          [
            "/assets/gallery/mup/4.jpg",
            "Upward view of a vertical disconnect switch with a digital target indicator confirming open position, set against a bright blue sky and direct sunlight.",
          ],
          [
            "/assets/gallery/mup/5.jpg",
            "User’s virtual hands inserting the operating bar into the Cleaveland Price coupling mechanism beneath a caution-labeled switch, preparing for manual uncoupling in a desert substation setting.",
          ],
          [
            "/assets/gallery/mup/6.jpg",
            "Coupling mechanism locked and tagged after uncoupling procedure, with a user holding a two-way radio to confirm task completion with the system operator.",
          ],
        ],
        mob: [
          [
            "/assets/gallery/mup/mob/1.jpg",
            "Open utility truck compartment showing required PPE including safety boots, high-visibility vest, hard hat, safety gloves, and protective eyewear, laid out in a desert substation environment.",
          ],
          [
            "/assets/gallery/mup/mob/2.jpg",
            "User holding a yellow two-way radio while reviewing a virtual System Operations Clearance Order next to a utility truck, preparing for switching procedures.",
          ],
          [
            "/assets/gallery/mup/mob/3.jpg",
            "Technician with insulated gloves stands in front of an opened motor operator cabinet, inspecting internal components and control switches for local manual operation.",
          ],
          [
            "/assets/gallery/mup/mob/4.jpg",
            "Upward view of a vertical disconnect switch with a digital target indicator confirming open position, set against a bright blue sky and direct sunlight.",
          ],
          [
            "/assets/gallery/mup/mob/5.jpg",
            "User’s virtual hands inserting the operating bar into the Cleaveland Price coupling mechanism beneath a caution-labeled switch, preparing for manual uncoupling in a desert substation setting.",
          ],
          [
            "/assets/gallery/mup/mob/6.jpg",
            "Coupling mechanism locked and tagged after uncoupling procedure, with a user holding a two-way radio to confirm task completion with the system operator.",
          ],
        ],
      },
      {
        pc: null,
        mob: null,
        pcThumb:
          "/assets/gallery/mup/Fallback-main-mup-1920x774_00000.jpg",
        mobThumb:
          "/assets/gallery/mup/mob/bg-mob.jpg",
      },
      null,
      "/assets/gallery/mup/card/Discover-banner-mup-688x386_00000.jpg",
      t(`1013.cardalt`),
      t(`1013.videoalt`),
      t(`1013.keywords`),
      'mup'
    ),
	
  ];

  return DATA;
}

export async function getTrainingInfo(id) {
  const data = await getLocalizedTrainingInfo();
  const found = data.find((item) => item.linkid === id);
  return found;
}

export async function getTrainingInfoList() {
  const DATA = await getLocalizedTrainingInfo();

  const order = [
    101, 1018, 1011, 1001, 1009, 1021, 1023, 1003, 1002, 1027, 1008, 1016, 1007,
    2002, 1030, 1019, 1013
  ];
  const orderMap = order.reduce((acc, id, index) => {
    acc[id] = index;
    return acc;
  }, {});

  return DATA.sort((a, b) => orderMap[a.id] - orderMap[b.id]);
}

export async function getRandomTrainings(count = 3) {
  const DATA = await getLocalizedTrainingInfo();

  const shuffled = [...DATA];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}

export async function getFreeTraining() {
  const DATA = await getLocalizedTrainingInfo();

  const freeTrainings = DATA.filter((item) => item.plan === "Free").sort(
    (a, b) => a.id - b.id
  );
  const standardTr = DATA.find((item) => item.id === 1001);
  const mccTr = DATA.find((item) => item.id === 1018);

  return [...freeTrainings, standardTr, mccTr].filter(Boolean);
}
