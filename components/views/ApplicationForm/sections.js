import Experience from './Experience';
// import Notifications from './Notifications';
import OnSiteAvailability from './OnSiteAvailability';
import PersonalInfo from './PersonalInfo';
import References from './References';
import RemoteAvailability from './RemoteAvailability';

const sections = translations => [
  {
    id: 'personal_info',
    name: translations.personalInfoHeader,
    Component: PersonalInfo,
  },
  {
    id: 'experience',
    name: translations.experienceHeader,
    Component: Experience,
  },
  {
    id: 'references',
    name: translations.referencesHeader,
    Component: References,
  },
  {
    id: 'remote-availability',
    name: translations.remoteAvailabilityHeader,
    Component: RemoteAvailability,
  },
  {
    id: 'on-site-availability',
    name: translations.onSiteAvailabilityHeader,
    Component: OnSiteAvailability,
  },
  // {
  //   id: 'notifications',
  //   name: '~Notifications',
  //   Component: Notifications,
  // },
];

export default sections;
