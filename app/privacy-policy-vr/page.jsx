import Link from "next/link"

import '../styles/Docs.css'

function PrivacyVR() {
	return (
		<div className="container">
			<div className='policy'>
				<h1>Privacy Policy VR App</h1>
				<p>Last Updated: November 25, 2024</p>
				<article>
					<h2>Introduction</h2>
					<p>This Privacy Policy explains how Metaenga, Inc.(“we”, “us”, or “Incision”) collects, uses, and protects information related to your use of our virtual reality (VR) education application (the “App”). This policy applies to all simulations and features within the App.</p>

					<p>Metaenga currently offers the following simulations:</p>

					<ul>
						<li>Metaenga: XR Training Platfrom</li>
					</ul>

					<p>Our goal is to collect minimal data necessary to improve your experience while ensuring compliance with applicable privacy regulations, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). For inquiries related to data protection, you may contact our Data Protection Officer at <a className='doc__link' href='mailto:info@metaenga.com'>info@metaenga.com</a> </p>
				</article>
				<article>
					<h2>Data We Collect</h2>
					<p><b>Personal and Technical Information</b> <br />
						We do not collect personal identification information (e.g., names, email addresses) or technical data (e.g., IP addresses, browser types). Additionally, the App does not collect or process any sensitive personal information, such as health-related data.
					</p>
					<p>
						<b>Usage Data</b> <br />
						We may collect anonymous usage data to enhance the functionality and user experience of the App. This data may include:
					</p>
					<ul>
						<li>Device type (e.g., VR device used)</li>
						<li>Session length (how long the App is used during each session)</li>
						<li>Frequency of use (how often the App is utilized)</li>
						<li>User interactions within simulations (e.g., simulation tools accessed)</li>
						<li>Features used (which simulations or functionalities are accessed)</li>
					</ul>
					<p>This data is collected solely to improve the App&apos;s performance and usability, and is not linked to any personal identifiers.</p>
				</article>
				<article>
					<h2>Cookies</h2>
					<p>The App does not use cookies or any other web-based tracking mechanisms.</p>
				</article>
				<article>
					<h2>How We Use the Data</h2>
					<p>The data we collect is used for the following purposes:</p>
					<ul>
						<li>
							<b>Improving User Experience: </b>We analyze usage patterns to optimize the performance and features of the App.
						</li>
						<li>
							<b>Product Development:</b> Usage data helps us understand how the App is being used, allowing us to enhance existing features and develop new content.
						</li>
					</ul>
					<p>We do not collect, use, or store any personal or sensitive information.</p>
				</article>
				<article>
					<h2>Compliance with GDPR and CCPA</h2>
					<p>We are committed to protecting your privacy and complying with applicable laws, including the GDPR and CCPA.</p>
					<p>Although we do not collect personal data, if any changes to our data collection practices occur, the following rights will apply:</p>
					<ul>
						<li><b>Right to Access: </b>You may request access to any data we may hold about you.</li>
						<li><b>Right to Rectification: </b>You may request correction of inaccurate or incomplete data.</li>
						<li><b>Right to Deletion: </b>You may request deletion of your data, where applicable.</li>
						<li><b>Right to Data Portability: </b>You may request a copy of your data in a structured, commonly used format.</li>
						<li><b>Right to Object/Restrict Processing: </b>YYou may request that we limit how we process your data.</li>
					</ul>
					<p>To exercise any of these rights, or for inquiries about our data practices, please contact us at <a className='doc__link' href='mailto:info@metaenga.com'>info@metaenga.com</a></p>
				</article>
				<article>
					<h2>Third-Party Services</h2>
					<p>We do not use third-party analytics tools within the App. However, when the App is accessed via platforms such as Meta (Meta Horizon Store), these platforms may collect data about your interactions with the App. We recommend reviewing the privacy policies of the relevant platforms to understand how your data is handled.</p>
					<p>We do not share, sell, or rent any data to third parties.</p>
				</article>
				<article>
					<h2>Data Security</h2>
					<p>We are committed to protecting the limited data we collect. Since the App does not collect any personal or sensitive information, the security risks are minimal. The App can function without an active internet connection, and any usage data collected is anonymized. While the App does not require special security measures such as encryption of personal data, we apply appropriate safeguards to ensure the protection of anonymized data from unauthorized access or misuse.</p>
				</article>
				<article>
					<h2>Data Retention</h2>
					<p>We do not store personal data. Any anonymized usage data collected is retained only for the purpose of improving the App&apos;s functionality and user experience.</p>
				</article>
				<article>
					<h2>Changes to this Privacy Policy</h2>
					<p>We reserve the right to update this Privacy Policy at any time. When changes are made, the &quot;Last Updated&quot; date at the top of this page will be revised. We encourage you to review this policy periodically to stay informed about how we protect your privacy. In the event of significant changes, we will notify users via the App or relevant platform.</p>
				</article>
				<article>
					<h2>Acceptance of Terms</h2>
					<p>By using the App, you agree to the terms outlined in this Privacy Policy. If you do not agree to these terms, please discontinue your use of the App. Continued use of the App after any changes to the Privacy Policy will be considered acceptance of those changes.</p>
				</article>
				<article>
					<h2>Contact Us</h2>
					<p>If you have any questions or concerns about this Privacy Policy or your interactions with the App, please contact us at <a className='doc__link' href='mailto:info@metaenga.com'>info@metaenga.com</a></p>
				</article>
			</div>
		</div>
	)
}

export default PrivacyVR