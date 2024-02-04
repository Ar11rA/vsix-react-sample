using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.WinForms;
using System;
using System.Diagnostics.CodeAnalysis;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Forms;
using System.Windows.Markup;

namespace VSIXProject1
{
    /// <summary>
    /// Interaction logic for ToolWindow2Control.
    /// </summary>
    public partial class ToolWindow2Control : System.Windows.Controls.UserControl, IComponentConnector
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ToolWindow2Control"/> class.
        /// </summary>
        public ToolWindow2Control()
        {
            this.InitializeComponent();
            Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.Run(async delegate
            {
                this.InitializeAsync();
            });
            
        }


        private async void InitializeAsync()
        {
            var wv = new WebView2
            {
                Dock = DockStyle.Fill
            };
            var env = await CoreWebView2Environment.CreateAsync(userDataFolder: "C:/Users/User/Documents/My Games");
            await wv.EnsureCoreWebView2Async(env);
            wv.Source = new System.Uri("https://www.google.com/");
            wv.CoreWebView2.Navigate("https://www.google.com/");
        }

        /// <summary>
        /// Handles click on the button by displaying a message box.
        /// </summary>
        /// <param name="sender">The event sender.</param>
        /// <param name="e">The event args.</param>
        [SuppressMessage("Microsoft.Globalization", "CA1300:SpecifyMessageBoxOptions", Justification = "Sample code")]
        [SuppressMessage("StyleCop.CSharp.NamingRules", "SA1300:ElementMustBeginWithUpperCaseLetter", Justification = "Default event handler naming pattern")]
        private void button1_Click(object sender, RoutedEventArgs e)
        {
            System.Windows.MessageBox.Show(
                string.Format(System.Globalization.CultureInfo.CurrentUICulture, "Invoked '{0}'", this.ToString()),
                "ToolWindow2");
        }
    }
}