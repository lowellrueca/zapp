using System.Collections.Generic;

namespace Zapp.Web.Model.ViewModel
{
    public class NavigationViewModelService
    {

        private static readonly Dictionary<object, object> _accountNavigation = new Dictionary<object, object>() {
            {"sign-in", "Sign-In"},
            {"sign-out", "Sign-Out"},
            {"sign-up", "Sign-Up"},
            {"profile", "My Profile"}
        };

        private static readonly Dictionary<object, object> _effectsTypeNavigation = new Dictionary<object, object>() {
            {"chorus", "Chorus"},
            {"compressor", "Compressor"},
            {"distortion", "Distortion"},
            {"delay", "Delay"},
            {"echo", "Echo"},
            {"flanger", "Flanger"},
            {"fuzz", "Fuzz"},
            {"loop", "Loop"},
            {"multiEffects", "Multi-Effects"},
            {"octave", "Octave"},
            {"overdrive", "Overdrive"},
            {"preAmp", "Pre-amp"},
            {"reverb", "Reverb"},
            {"tremolo", "Tremolo"},
            {"tuner", "Tuner"},
            {"vibrato", "Vibrato"},
            {"wah", "Wah"},
        };

        private static readonly Dictionary<object, object> _brandsNavigation = new Dictionary<object, object>() {
                {"mxr","MXR"},
                {"boss","BOSS"},
                {"dunlop","Dunlop"},
                {"electroHarmonix","Electro-Harmonix"},
                {"tcElectronic","TC Electronic"},
                {"ibanez","Ibanez"},
                {"digiTech","DigiTech"},
        };

        public Dictionary<object, object> AccountNavigation { get => _accountNavigation; }
        public Dictionary<object, object> EffectsTypeNavigation { get => _effectsTypeNavigation; }
        public Dictionary<object, object> BrandsNavigation { get => _brandsNavigation; }
    }
}
