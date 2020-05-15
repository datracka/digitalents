/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Font from 'ui/Font';
import Section from 'ui/common/Section';
import DefaultLayout from 'layouts/DefaultLayout';
import styled from '@emotion/styled';

const SpacerSection = styled(Section)`
  margin-top: 12rem;
  margin-bottom: 1rem;
  flex-direction: column;
  align-items: flex-start;
`;

const Paragraph = styled('p')`
  margin: 10px 0px;
`;

const Spacer = styled('div')`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export default () => {
  return (
    <DefaultLayout>
      <SpacerSection>
        <Font variant="bigPrimaryDarker" gutterBottom>
          <h2>Datenschutzbestimmungen Gerlent</h2>
        </Font>
        <Font variant="textPrimary" gutterBottom>
          <Paragraph>
            Wir erheben, verwenden und Speichern Ihre personenbezogenen Daten ausschließlich im
            Rahmen der Bestimmungen der gültigen Bundesdatenschutzbestimmungen der Bundesrepublik
            Deutschland. Nachfolgend unterrichten wir Sie über Art, Umfang und Zweck der
            Datenerhebung und Verwendung.
          </Paragraph>
        </Font>
        <Font variant="textPrimary" gutterBottom>
          <Spacer>
            <Paragraph>
              <Font variant="textPrimaryDarker">Verantwortliche Stelle</Font>
            </Paragraph>
          </Spacer>
          <Spacer>
            <Paragraph>
              Betreiber der Websites von Gerlent und damit verantwortliche Stelle ist die
            </Paragraph>
            <Paragraph>Gerlent UG (haftungsbeschränkt)</Paragraph>
            <Paragraph>Vertreten durch den Geschäftsführer Behsaad Ramez</Paragraph>
            <Paragraph>Am Kielortplatz 2</Paragraph>
            <Paragraph>22850 Norderstedt</Paragraph>
          </Spacer>
          <Spacer>
            <Paragraph>
              <Font variant="textPrimaryDarker">Erhebung und Verarbeitung von Daten</Font>
            </Paragraph>
          </Spacer>
          <Spacer>
            <Paragraph>
              Folgende Daten erheben wir im Rahmen der Nutzung der Websites von Gerlent:
            </Paragraph>
          </Spacer>
          <Paragraph>
            - Gerätekennungen (Informationen über das Gerät und die Einstellungen des Gerätes mit
            dem der Nutzer auf die Website von Gerlent zugreift, die Geräteeinstellungen und das
            verwendete Betriebssystem.
          </Paragraph>
          <Paragraph>
            - Inhalte die im Rahmen des Bereitstellen von Profildaten vom Nutzer eingegeben werden
          </Paragraph>
          <Paragraph>
            - Inhalte die im Rahmen des Bereitstellen von Profildaten vom Nutzer eingegeben werden
          </Paragraph>
          <Paragraph>
            - Protokolldatei Informationen, also Daten die vom Browser des Nutzers bei jedem Aufruf
            automatisch zur Verfügung gestellt werden, wenn der Browser auf eine Website zugreift.
            Diese Protokolldaten beinhalten beispielsweise die Art und Einstellungen des Browsers,
            die anfragende IP-Adresse, Datum und Zeitpunkt der Abfrage sowie Cookies.
          </Paragraph>
          <Paragraph>
            - Im Rahmen der Registrierung werden die dort eingegebenen Daten aufgrund der
            Einwilligung der Nutzer gespeichert und im Rahmen der allgemeinen Nutzungsbedingungen im
            Rahmen des Netzwerks von Gerlent für andere registrierte Nutzer veröffentlicht. Das
            genutzte Nutzerkonto wird mit den vom Nutzer bereitgestellten Inhalten verknüpft.
          </Paragraph>
          <Spacer>
            <Paragraph>
              Rechtsgrundlage für die Erhebung dieser Daten ist entweder Ihre Einwilligung in die
              Verarbeitung gem. Art. 6 Abs. 1 lit. a) DSGVO, der Umstand, dass die Verarbeitung gem.
              Art. 6 Abs. 1 lit. b) DSGVO für die Erfüllung eines Vertrages, dessen Vertragspartei
              die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich, die auf Ihre Anfrage erfolgen und/oder die Verarbeitung ist gem. Art. 6
              Abs. 1 lit. c) DSGVO zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der
              wir unterliegen. Hierbei handelt es sich insbesondere um kaufmännische
              Aufbewahrungspflichten der Geschäftskorrespondenz. Weiterhin stellt die Notwendigkeit
              der Erhebung dieser Daten um den Onlineservice anbieten zu können ein berechtigtes
              Interesse im Sinne des Art. 6 Abs. 1 lit. f). DSGVO dar.
            </Paragraph>
          </Spacer>
          <Spacer>
            <Paragraph
              css={css`
                text-decoration: underline;
              `}
            >
              Eine erteilte Einwilligung kann von Ihnen jederzeit mit Wirkung für die Zukunft durch
              formlose Nachricht an unsere oben angegebenen Kontaktdaten widerrufen werden.
            </Paragraph>
          </Spacer>
          <Spacer>
            <Font variant="textPrimaryDarker">Cookies</Font>
          </Spacer>
          <Spacer>
            <Paragraph>
              Unsere Websites verwenden Cookies. Ein Cookie ist eine Textdatei, die beim Besuch
              einer Internetseite verschickt und auf der Festplatte des Nutzers der Website oder dem
              mobilen Endgerät mit dem die Website aufgerufen wird, zwischengespeichert wird. Wird
              der entsprechende Server unserer Website erneut vom Nutzer aufgerufen, sendet der
              Browser des Nutzers der Website den zuvor empfangenen Cookie wieder zurück an den
              Server. Der Server kann dann die durch diese Prozedur erhaltenen Informationen auf
              verschiedene Arten auswerten. Durch Cookies können z. B. Werbeeinblendungen gesteuert
              oder das Navigieren auf einer Internetseite erleichtert werden. Wenn der Nutzer der
              Website die Nutzung von Cookies unterbinden will, kann er dies durch lokale Vornahme
              der Änderungen seiner Einstellungen in dem auf seinem Computer verwendeten
              Internetbrowser, also dem Programm zum Öffnen und Anzeigen von Internetseiten (z.B.
              Internet Explorer, Mozilla Firefox, Opera oder Safari) tun. Ohne Cookies ist eine
              Bereitstellung sämtlicher Funktionalitäten des von uns angebotenen Service jedoch
              nicht möglich.
            </Paragraph>
            <Paragraph>
              Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit. f) DSGVO.
              Unser berechtigtes Interesse liegt in der Verbesserung, Stabilität, Funktionalität und
              Sicherheit unseres Onlinedienstes bzw. Webauftritts.
            </Paragraph>
          </Spacer>
          <Spacer>
            <Font variant="textPrimaryDarker">Nutzung der Daten</Font>
          </Spacer>
          <Spacer>
            <Paragraph>
              Soweit der Nutzer unseres Netzwerkes personenbezogene Daten zur Verfügung gestellt
              hat, verwenden wir diese nur zur Beantwortung von Anfragen des Nutzers unseres
              Netzwerkes, zur Bereitstellung der Funktionen des Netzwerkes und für die technische
              Administration, insbesondere um technische Fehler zu identifizieren und zu beheben
              sowie um die Funktion der Dienste zu überwachen.
            </Paragraph>
            <Paragraph>Wie und an wen werden die Daten weitergegeben?</Paragraph>
            <Paragraph>
              Eine Weitergabe von Daten an Dritte erfolgt ausschließlich aufgrund der Einwilligung
              des jeweiligen Nutzers, z.B. im Rahmen der vertragsgemäßen Veröffentlichung der
              Profildaten des Nutzers oder zum Zwecke der Vertragserfüllung, sofern der Nutzer eine
              Vermittlung von Dienstleistungsaufträgen unter Nutzung des Netzwerkes von Gerlent
              durch Abschluss eines gesonderten Vertrages mit Gerlent wünscht.
            </Paragraph>
            <Paragraph>
              Die Nutzerinhalte werden nur im Rahmen der ANB von Gerlent für andere Nutzer des
              Netzwerks bzw. in anonymiserter Form sämtlichen Nutzern von Gerlent zugänglich
              gemacht.
            </Paragraph>
          </Spacer>
          <Spacer>
            <Font variant="textPrimaryDarker">Löschung von Daten</Font>
          </Spacer>
          <Spacer>
            <Paragraph>
              Weitere personenbezogene Daten z.B. im Zusammenhang mit Nutzeranfragen werden
              gelöscht, wenn der Nutzer des Netzwerkes die Einwilligung zur Speicherung widerruft,
              was jederzeit mit Wirkung für die Zukunft durch kurze Nachricht an unsere oben
              angegebenen Kontaktdaten möglich ist, wenn ihre Kenntnis zur Erfüllung des mit der
              Speicherung verfolgten Zwecks nicht mehr erforderlich ist oder wenn ihre Speicherung
              aus sonstigen gesetzlichen Gründen unzulässig ist. Daten für Abrechnungszwecke und
              buchhalterische Zwecke werden von einem Löschungsverlangen nicht berührt.
            </Paragraph>
          </Spacer>
          <Spacer>
            <Font variant="textPrimaryDarker">
              Daten die wir im Rahmen individueller Kommunikation z.B. durch E-Mail Anfragen
              erhalten
            </Font>
          </Spacer>
          <Spacer>
            <Paragraph>
              Daten die wir im Rahmen individueller Kommunikation von Ihnen erhalten, werden bei uns
              zu folgenden Zwecken gespeichert:
            </Paragraph>
            <Paragraph>
              a) Um unseren Verpflichtungen aus etwaigen zwischen Ihnen und uns geschlossenen
              Verträgen nachzukommen bzw. zur Anbahnung solcher Verträge
            </Paragraph>
            <Paragraph>
              b) Zur Bearbeitung der Anfrage und für den Fall sich eventuell ergebender Rückfragen.
            </Paragraph>
            <Paragraph>
              Rechtsgrundlage für die Erhebung dieser Daten ist entweder Ihre Einwilligung in die
              Verarbeitung gem. Art. 6 Abs. 1 lit. a) DSGVO, der Umstand, dass die Verarbeitung gem.
              Art. 6 Abs. 1 lit. b) DSGVO für die Erfüllung eines Vertrages, dessen Vertragspartei
              die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich, die auf Ihre Anfrage erfolgen und/oder die Verarbeitung ist gem. Art. 6
              Abs. 1 lit. c) DSGVO zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der
              wir unterliegen. Hierbei handelt es sich insbesondere um kaufmännische
              Aufbewahrungspflichten der Geschäftskorrespondenz. Weiterhin stellt eine laufende
              Kundenbeziehung zwischen Ihnen und uns ein berechtigtes Interesse im Sinne des Art. 6
              Abs. 1 lit. f). DSGVO dar.
            </Paragraph>
            <Paragraph
              css={css`
                text-decoration: underline;
              `}
            >
              Eine erteilte Einwilligung können Sie jederzeit durch kurze Mitteilung an unsere oben
              angegebenen Kontaktdaten widerrufen.
            </Paragraph>
          </Spacer>
          <Spacer>
            <Font variant="textPrimaryDarker">Löschung von Daten</Font>
          </Spacer>
          <Spacer>
            <Paragraph>
              Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18 DSGVO gelöscht
              oder in ihrer Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser
              Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten
              gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der
              Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten
              nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke
              erforderlich sind, wird deren Verarbeitung eingeschränkt. D.h. die Daten werden
              gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus
              handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.
            </Paragraph>
            <Paragraph>
              Nach gesetzlichen Vorgaben in Deutschland, erfolgt die Aufbewahrung insbesondere für
              10 Jahre gemäß §§ 147 Abs. 1 AO, 257 Abs. 1 Nr. 1 und 4, Abs. 4 HGB (Bücher,
              Aufzeichnungen, Lageberichte, Buchungsbelege, Handelsbücher, für Besteuerung
              relevanter Unterlagen, etc.) und 6 Jahre gemäß § 257 Abs. 1 Nr. 2 und 3, Abs. 4 HGB
              (Handelsbriefe). Verwendung Google Analytics
            </Paragraph>
            <Paragraph>
              Unsere Websites verwenden den Analysedienst Google Analytics. Dieser Webanalysedienst
              wird von der Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (im
              Folgenden kurz: Google) betrieben.
            </Paragraph>
            <Paragraph>
              Dieses Analysetool funktioniert auf Grundlage von Cookies. Ein Cookie ist eine
              Textdatei, die beim Besuch einer Internetseite oder Nutzung der App verschickt und auf
              der Festplatte des Nutzers der Website zwischengespeichert wird um eine Analyse der
              Benutzung der Webseite durch Sie zu ermöglichen. Die durch den Cookie gespeicherten
              Informationen werden in der Regel an einen Server von Google in den USA übertragen und
              dort dann gespeichert.
            </Paragraph>
            <Paragraph>
              Im Rahmen der IP-Anonymisierung wird Ihre IP-Adresse von Google innerhalb eines
              Mitgliedsstaates der EU oder einem anderen Vertragsstaat des Abkommens über den
              europäischen Wirtschaftsraum zuvor gekürzt. In unserem Auftrag wird Google die
              übertragenen Informationen nutzen, um einen Report über die Nutzung der Webseite zu
              erstellen. Die im Rahmen von Google Analytics übermittelte IP-Adresse wird nicht mit
              anderen Daten von Google zusammengeführt. Wenn Sie die Nutzung von Cookies im Rahmen
              der Nutzung unserer Internetseite unterbinden möchten, können Sie dies durch lokale
              Vornahme der Änderungen Ihrer Einstellungen in dem auf Ihrem Computer verwendeten
              Internetbrowser (z.B. Safari, Internet Explorer, Opera, Firefox etc.), also dem
              Programm zum Öffnen und Anzeigen von Internetseiten tun. Ferner können Sie die
              Erfassung und Verarbeitung Ihrer Daten durch den Cookie von Google verhindern indem
              Sie ein unter dem folgenden Link von Google angebotenes Browser-Plugin herunterladen
              und installieren:
              <Paragraph>
                <a href="http://tools.google.com/dlpage/gaoptout?hl=de">
                  http://tools.google.com/dlpage/gaoptout?hl=de
                </a>
              </Paragraph>
              Nähere Informationen finden Sie in den Datenschutzhinweisen von Google, die Sie hier
              abrufen können:
              <Paragraph>
                <a href="https://www.google.com/policies/privacy">
                  www.google.com/policies/privacy/
                </a>
              </Paragraph>
            </Paragraph>
            <Paragraph>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in
              der Analyse, Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.
              Änderungen dieser Datenschutzbestimmungen
            </Paragraph>
            <Paragraph>
              Wir behalten uns das Recht vor, diese Datenschutzbestimmungen jederzeit mit Wirkung
              für die Zukunft zu ändern. Eine jeweils aktuelle Version ist auf der Website
              verfügbar. Bitte suchen Sie die Website regelmäßig auf und informieren Sie sich über
              die geltenden Datenschutzbestimmungen.
            </Paragraph>
          </Spacer>
          <Spacer>
            <Font variant="textPrimaryDarker">Ihre Rechte und Kontakte</Font>
          </Spacer>
          <Spacer>
            <Paragraph>
              Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18 DSGVO gelöscht
              Sie können Ihre personenbezogenen Daten z.B. jederzeit kostenlos einsehen und ggf.
              auch deren Berichtigung und/oder – wenn der Bestand der Datenspeicherung nicht zwecks
              Vertragserfüllung, satzungsbedingt oder gesetzlich erforderlich ist – eine Löschung
              und/oder auch nur Sperrung verlangen. Wir empfehlen Ihnen, vor Geltendmachung eines
              jedweden uns gegenüber erhobenen Löschungsanspruches uns gegenüber Ihre Daten ggf.
              selbst gesichert zu haben. Ihnen stehen ggf. auch die Rechte auf Einschränkung der
              Verarbeitung, Widerspruch gegen die Verarbeitung sowie Datenübertragbarkeit zu, die
              sich aus den Art. 15 – 21 Datenschutzgrundverordnung (DSGVO) ergeben. Soweit die
              Verarbeitung auf Ihrer gesonderten Einwilligung beruht, können Sie diese Einwilligung
              jederzeit mit Wirkung für die Zukunft widerrufen.
            </Paragraph>
            <Paragraph>
              Zu den vorgenannten Zwecken und/oder um nähere Informationen hierüber zu erhalten,
              wenden Sie sich an uns per E-Mail an die Adresse info@gerlent.com oder an unsere im
              Impressum dieser Webseite angegebenen Kontakt- und Adressdaten.
            </Paragraph>
            <Paragraph>
              Sollten Sie Fragen, Kommentare oder Anfragen bezüglich der Erhebung, Verarbeitung und
              Nutzung Ihrer personenbezogenen Daten durch uns haben, wenden Sie sich bitte wie
              bereits dargelegt an uns über die Impressum dieser Internetseiten genannten
              Kontaktdaten. Falls Sie der Auffassung sein sollten, dass die Verarbeitung Ihrer
              personenbezogenen Daten über/durch uns rechtswidrig erfolgt, steht Ihnen unbeschadet
              dessen als betroffene Person auch das Recht zu, sich gemäß Art. 77 DSGVO bei einer der
              ebenfalls nach dieser Vorschrift zuständigen Aufsichtsbehörden zu beschweren.
            </Paragraph>
            <Paragraph>Ende der Datenschutzbelehrung.</Paragraph>
          </Spacer>
        </Font>
      </SpacerSection>
    </DefaultLayout>
  );
};
